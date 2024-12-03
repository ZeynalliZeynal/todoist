import { NextFunction, Request, Response } from "express";
import User from "../model/user.model";
import catchAsync from "../utils/catch-errors";
import catchErrors from "../utils/catch-errors";
import jwt from "jsonwebtoken";
import AppError from "../utils/app-error";
import { ObjectId } from "mongodb";
import crypto from "crypto";
import {
  jwt_cookie_expires_in,
  jwt_expires_in,
  jwt_secret,
  node_env,
} from "../constants/env";
import { loginSchema, signupSchema } from "../validator/auth.schema";
import {
  createAccount,
  loginUser,
  refreshUserAccessToken,
  verifyEmail,
} from "../service/auth.service";
import { StatusCodes } from "http-status-codes";
import {
  clearAuthCookies,
  getAccessTokenCookieOptions,
  getRefreshTokenCookieOptions,
  setAuthCookies,
} from "../utils/cookies";
import { verifyToken } from "../utils/jwt";
import Session from "../model/session.model";
import appAssert from "../utils/app-assert";
import { verifyEmailTemplate } from "../utils/email-templates";
import { sendMail } from "../utils/email";

const signToken = (id: ObjectId) =>
  jwt.sign({ id }, jwt_secret, {
    expiresIn: jwt_expires_in,
  });

const createSendToken = (user: IUser, statusCode: number, res: Response) => {
  const token = signToken(user.id);

  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + Number(jwt_cookie_expires_in) * 24 * 60 * 60 * 1000,
    ),
    secure: node_env === "production",
    httpOnly: true,
    sameSite: "lax",
  });

  res.status(statusCode).json({
    status: "success",
    token,
    user: {
      name: user.name,
      email: user.email,
      photo: user.photo,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
  });
};

export const signup = catchErrors(async (req, res, next) => {
  const request = signupSchema.parse({
    ...req.body,
    userAgent: req.headers["user-agent"],
  });

  const { refreshToken, accessToken, user } = await createAccount(request);

  return setAuthCookies({ res, refreshToken, accessToken })
    .status(StatusCodes.OK)
    .json({
      status: "success",
      data: {
        name: user.name,
        email: user.email,
        createdAt: user.createdAt,
        photo: user.photo,
      },
    });
});

export const login = catchErrors(async (req, res, next) => {
  const request = loginSchema.parse({
    ...req.body,
    userAgent: req.headers["user-agent"],
  });

  const { accessToken, refreshToken } = await loginUser(request);

  return setAuthCookies({ res, refreshToken, accessToken })
    .status(StatusCodes.OK)
    .json({
      status: "success",
      message: "Login successful",
    });
});

export const logout = catchErrors(async (req, res, next) => {
  const accessToken = req.cookies.accessToken;
  const { payload } = verifyToken(accessToken);

  if (payload) await Session.findByIdAndDelete(payload.sessionId);

  return clearAuthCookies(res).status(StatusCodes.OK).json({
    status: "success",
    message: "Logout successful",
  });
});

export const verifyEmailController = catchErrors(async (req, res, next) => {
  await verifyEmail(req.params.token);

  return res.status(StatusCodes.OK).json({
    message: "Email was successfully verified",
  });
});

export const verifyAuth = catchAsync(
  async (req: Request, res: Response, next) => {
    const token = req.cookies.accessToken;

    if (!token)
      return next(new AppError("You must log in to perform this action", 401));

    const { payload } = verifyToken(token);
    if (!payload)
      return next(new AppError("Invalid token", StatusCodes.UNAUTHORIZED));

    const currentUser = await User.findById(payload.userId).select(
      "+role -__v",
    );

    if (!currentUser)
      return next(
        new AppError(
          "Token is no longer belong to this user. Please log in again",
          StatusCodes.UNAUTHORIZED,
        ),
      );

    if (!currentUser.isVerified())
      return next(
        new AppError("Please verify your email", StatusCodes.UNAUTHORIZED),
      );

    if (currentUser.isPasswordChangedAfter(payload.iat))
      return next(
        new AppError(
          "Password recently changed. Please log in again",
          StatusCodes.UNAUTHORIZED,
        ),
      );

    req.user = currentUser;
    next();
  },
);

export const refreshToken = catchErrors(
  async (req: Request, res: Response, next: NextFunction) => {
    const refreshToken = req.cookies.refreshToken;
    appAssert(refreshToken, "Missing refresh token", StatusCodes.UNAUTHORIZED);

    const { newRefreshToken, accessToken } =
      await refreshUserAccessToken(refreshToken);

    if (newRefreshToken) {
      res.cookie(
        "refreshToken",
        newRefreshToken,
        getRefreshTokenCookieOptions(),
      );
    }

    return res
      .status(StatusCodes.OK)
      .cookie("accessToken", accessToken, getAccessTokenCookieOptions())
      .json({
        status: "success",
        message: "Access token refreshed",
      });
  },
);

export const authorizeTo = (roles: Roles) =>
  catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action.", 403),
      );
    }

    next();
  });

export const updatePassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findById(req.user!.id).select("+password");

    if (!user) return next(new AppError("You are not logged in.", 401));

    if (!(await user.comparePasswords(req.body.passwordCurrent, user.password)))
      return next(new AppError("Your password is wrong.", 401));

    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;
    await user.save();

    createSendToken(user, 200, res);

    next();
  },
);

export const forgotPassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findOne({ email: req.body.email });

    if (!user) return next(new AppError("No user with this email.", 404));

    const resetToken = user.createResetPasswordToken();
    await user.save({
      validateBeforeSave: false,
    });
    const url = `${req.protocol}://${req.get("host")}/api/v1/auth/password/reset/${resetToken}`;

    try {
      await sendMail({
        to: [user.email],
        ...verifyEmailTemplate(url),
      });
      res.status(StatusCodes.OK).json({
        status: "success",
        message: "Check your email.",
      });
    } catch (err) {
      user.resetPasswordToken = undefined;
      user.resetPasswordExpires = undefined;
      await user.save({ validateBeforeSave: false });
      return next(new AppError("Failed to send the token to your email.", 500));
    }
  },
);

export const resetPassword = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const hashedToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      resetPasswordToken: hashedToken,
      resetPasswordExpires: {
        $gte: Date.now(),
      },
    });

    if (!user)
      return next(
        new AppError("Token is invalid or has expired. Try again.", 400),
      );

    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;
    user.resetPasswordExpires = undefined;
    user.resetPasswordToken = undefined;

    await user.save();

    createSendToken(user, 200, res);
  },
);
