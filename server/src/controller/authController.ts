import { NextFunction, Request, Response } from "express";
import User from "../model/userModel";
import catchAsync from "../utils/catchAsync";
import jwt from "jsonwebtoken";
import AppError from "../utils/appError";
import { ObjectId } from "mongodb";

const signToken = (id: ObjectId) =>
  jwt.sign({ id }, process.env.JWT_SECRET!, {
    expiresIn: process.env.JWT_EXPIRES_IN!,
  });

export const signup = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.create({
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    const token = signToken(user._id);

    res.status(201).json({
      status: "success",
      token,
      data: {
        fullName: user.fullName,
        email: user.email,
        photo: user.photo,
      },
    });
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

export const protect = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    next();
  },
);
