import mongoose from "mongoose";
import { ObjectId } from "mongodb";

const ROLES = ["admin", "user"] as const;
declare global {
  type UserRole = (typeof ROLES)[number];
  type Roles = ReadonlyArray<UserRole>;

  type Priorities = "priority 1" | "priority 2" | "priority 3" | "priority 4";

  interface ITask {
    createdAt: Date;
    updatedAt: Date;
    name: string;
    description?: String;
    completed?: boolean;
    tags?: string[];
    slug: string;
    priority: Priorities;
    dueDate?: Date;
    user: mongoose.Types.ObjectId | IUser;
  }

  interface ITemplate {
    createdAt: Date;
    updatedAt: Date;
    category: string;
    name: string;
    description: string;
    content: string;
    exampleUrl: string;
    imageUrl?: string;
  }

  interface IUser {
    id: ObjectId;
    createdAt: Date;
    updatedAt: Date;
    name: string;
    email: string;
    role: UserRole;
    photo?: string;
    password: string;
    passwordConfirm?: string;
    passwordChangedAt?: number;
    resetPasswordToken?: string;
    resetPasswordExpires?: number;
    isActive: boolean;
  }

  interface IUserMethods {
    isPasswordCorrect: (
      candidatePassword: string,
      userPassword: string,
    ) => Promise<boolean>;
    isPasswordChangedAfter: (JWTTimestamp?: number) => boolean;
    createResetPasswordToken: () => string;
  }
}
