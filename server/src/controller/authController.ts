import { NextFunction, Request, Response } from "express";
import User from "../model/userModel";
import catchAsync from "../utils/catchAsync";
import jwt, { JwtPayload } from "jsonwebtoken";
import AppError from "../utils/appError";
import { ObjectId } from "mongodb";
import sendMail from "../utils/email";
import crypto from "crypto";

const signToken = (id: ObjectId) =>
  jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN!,
  });

const createSendToken = (user: IUser, statusCode: number, res: Response) => {
  const token = signToken(user._id);

  res.status(statusCode).json({
    status: "success",
    token,
  });
};
const verifyToken = (token: string, secret: string): Promise<JwtPayload> => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        return reject(err);
      }
      resolve(decoded as JwtPayload);
    });
  });
};

export const signup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.create({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      role: req.body.email === process.env.ADMIN_EMAIL ? "admin" : "user",
    });

    createSendToken(user, 200, res);
  },
);

export const login = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    if (!email || !password)
      return next(new AppError("Email and password are required", 400));

    const user = await User.findOne({
      email,
    }).select("+password");

    if (!user || !(await user.isPasswordCorrect(password, user.password)))
      return next(new AppError("Email or password is incorrect", 404));

    const token = signToken(user._id);

    res.status(200).json({
      status: "success",
      token,
    });
  },
);

export const verifyAuth = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    let token;
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    )
      token = req.headers.authorization.split(" ").at(1);

    if (!token)
      return next(new AppError("You must log in to perform this action", 401));

    const decoded = await verifyToken(token, process.env.JWT_SECRET!);

    const currentUser = await User.findById(decoded.id);

    if (!currentUser)
      return next(
        new AppError(
          "Token is no longer belong to this user. Please log in again",
          401,
        ),
      );

    if (currentUser.isPasswordChangedAfter(decoded.iat))
      return next(
        new AppError("Password recently changed. Please log in again", 401),
      );

    req.user = currentUser;
    next();
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
    const user = await User.findById(req.user?._id).select("+password");

    if (!user) return next(new AppError("You are not logged in.", 401));

    if (
      !(await user.isPasswordCorrect(req.body.passwordCurrent, user.password))
    )
      return next(new AppError("Your password is wrong.", 401));

    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
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
    const resetURL = `${req.protocol}://${req.get("host")}/api/v1/auth/reset-password/${resetToken}`;
    const message = `Reset your password by sending a PATCH request with your new password to ${resetURL}.`;

    try {
      await sendMail({
        email: user.email,
        subject: "Your password reset token valid for 10 mins",
        from: "TodoistNEXT <todoist@next.app>",
        message,
      });
      res.status(200).json({
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
    user.passwordConfirm = req.body.passwordConfirm;
    user.resetPasswordExpires = undefined;
    user.resetPasswordToken = undefined;

    await user.save();

    createSendToken(user, 200, res);
  },
);
