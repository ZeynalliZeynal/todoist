import User from "../model/user.model";
import {
  admin_email,
  client_dev_origin,
  jwt_refresh_secret,
} from "../constants/env";
import VerificationCode from "../model/verification.model";
import VerificationCodeType from "../constants/verificationCodeType";
import { one_day_ms, oneYearFromNow, thirtyDaysFromNow } from "../utils/date";
import Session from "../model/session.model";
import appAssert from "../utils/app-assert";
import { StatusCodes } from "http-status-codes";
import {
  RefreshTokenPayload,
  refreshTokenSignOptions,
  signToken,
  verifyToken,
} from "../utils/jwt";
import AppError from "../utils/app-error";
import { sendMail } from "../utils/email";
import { verifyEmailTemplate } from "../utils/email-templates";

export interface CreateAccountParams {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  userAgent?: string;
}

export interface LoginParams {
  email: string;
  password: string;
  userAgent?: string;
}

export const createAccount = async (data: CreateAccountParams) => {
  //   verify that user doesn't exist
  const existingUser = await User.exists({
    email: data.email,
  });

  appAssert(!existingUser, "Email already in use", StatusCodes.CONFLICT);

  // create new user
  const user = await User.create({
    name: data.name,
    email: data.email,
    password: data.password,
    confirmPassword: data.confirmPassword,
    role: admin_email === data.email ? "admin" : "user",
  });

  // create verification code
  const verificationCode = await VerificationCode.create({
    userId: user.id,
    type: VerificationCodeType.EmailVerification,
    expiresAt: oneYearFromNow(),
  });

  // send verification email
  const url = `${client_dev_origin}/auth/email/verify/${verificationCode._id}`;
  try {
    await sendMail({
      to: [user.email],
      ...verifyEmailTemplate(url),
    });
  } catch (err) {
    throw new AppError(
      "Error occurred sending an email",
      StatusCodes.INTERNAL_SERVER_ERROR,
    );
  }

  // create session
  const session = await Session.create({
    userId: user.id,
    userAgent: data.userAgent,
  });

  const sessionInfo = {
    sessionId: session._id,
  };

  const refreshToken = signToken(sessionInfo, refreshTokenSignOptions);

  const accessToken = signToken({
    userId: user._id,
    ...sessionInfo,
  });

  return {
    user,
    accessToken,
    refreshToken,
  };
};

export const loginUser = async ({
  email,
  password,
  userAgent,
}: LoginParams) => {
  // get user by email
  const user = await User.findOne({ email }).select("+password");
  appAssert(user, "Email or password is incorrect", StatusCodes.UNAUTHORIZED);

  // validate password
  const isPasswordValid = await user!.comparePasswords(
    password,
    user!.password,
  );
  appAssert(
    isPasswordValid,
    "Invalid email or password",
    StatusCodes.UNAUTHORIZED,
  );

  const userId = user!.id;

  // create a session
  const session = await Session.create({
    userId,
    userAgent,
  });

  const sessionInfo = {
    sessionId: session._id,
  };

  // sign access token & refresh token
  const refreshToken = signToken(sessionInfo, refreshTokenSignOptions);

  const accessToken = signToken({
    ...sessionInfo,
    userId: userId,
  });

  // return user & tokens
  return {
    user,
    accessToken,
    refreshToken,
  };
};

export const refreshUserAccessToken = async (token: string) => {
  const { payload } = verifyToken<RefreshTokenPayload>(token, {
    secret: jwt_refresh_secret,
  });
  if (!payload) throw new AppError("Invalid token", StatusCodes.UNAUTHORIZED);

  const session = await Session.findById(payload.sessionId);
  if (!session && session!.expiresAt.getTime() > Date.now())
    throw new AppError("Session expired", StatusCodes.UNAUTHORIZED);

  const sessionNeedsRefresh =
    session!.expiresAt.getTime() - Date.now() <= one_day_ms;

  if (sessionNeedsRefresh) {
    session!.expiresAt = thirtyDaysFromNow();
    await session!.save();
  }

  const newRefreshToken = sessionNeedsRefresh
    ? signToken(
        {
          sessionId: session!._id,
        },
        refreshTokenSignOptions,
      )
    : undefined;

  const accessToken = signToken({
    userId: session!.userId,
    sessionId: session!._id,
  });

  return {
    accessToken,
    newRefreshToken,
  };
};

export const verifyEmail = async (code: string) => {
  const validCode = await VerificationCode.findOne({
    _id: code,
    type: VerificationCodeType.EmailVerification,
    expiresAt: { $gte: new Date() },
  });

  if (!validCode)
    throw new AppError(
      "Invalid or expired verification code",
      StatusCodes.NOT_FOUND,
    );

  const updatedUser = await User.findByIdAndUpdate(
    validCode.userId,
    {
      verified: true,
    },
    { new: true },
  );

  if (!updatedUser)
    throw new AppError("User not found", StatusCodes.UNAUTHORIZED);

  await validCode.deleteOne();

  return {
    user: updatedUser,
  };
};
