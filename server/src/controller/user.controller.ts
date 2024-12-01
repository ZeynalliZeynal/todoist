import { NextFunction, Request, Response } from "express";

import catchAsync from "../utils/catch-errors";
import User from "../model/user.model";
import AppError from "../utils/app-error";
import { updatePasswordRoute } from "../utils/constants";

const filterObj = (obj: Record<string, any>, keys: string[]) => {
  const newObj: Record<string, any> = {};
  Object.keys(obj).forEach((key) => {
    if (keys.includes(key)) newObj[key] = obj[key];
  });

  return newObj;
};

export const getAllUsers = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.find();

    res.status(200).json({
      status: "success",
      length: users.length,
      data: {
        users,
      },
    });
  },
);

export const getUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findById(req.params.id).populate("tasks");
    if (!user) return next(new AppError("No user found by this id", 404));

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  },
);

export const client_updateUser = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    if (req.body.password || req.body.passwordConfirm)
      return next(
        new AppError(
          `Password cannot be updated here. Use ${updatePasswordRoute}`,
          400,
        ),
      );

    const id = req.user!.id;
    const user = await User.findById(id);

    if (!user) return next(new AppError("User not found", 404));

    const filteredBody = filterObj(req.body, ["name", "email"]);

    const updatedUser = await User.findByIdAndUpdate(id, filteredBody, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) return next(new AppError("User not found", 404));

    updatedUser.updatedAt = new Date(Date.now());
    await updatedUser.save();

    res.status(200).json({
      status: "success",
      data: {
        user: {
          createdAt: updatedUser.createdAt,
          name: updatedUser.name,
          email: updatedUser.email,
          updatedAt: updatedUser.updatedAt,
          role: updatedUser.role === "admin" ? updatedUser.role : undefined,
        },
      },
    });
  },
);

export const client_deleteAccount = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    await User.findByIdAndUpdate(req.user!.id, {
      isActive: false,
    });

    res.status(204).json({
      status: "success",
      data: null,
    });
  },
);
