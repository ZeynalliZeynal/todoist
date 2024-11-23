import AppError from "../utils/app-error";
import { NextFunction, Request, Response } from "express";
import { CastError } from "mongoose";
import { MongoServerError } from "mongodb";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";

const jwt_handleSignatureError = (error: AppError & JsonWebTokenError) =>
  new AppError("Invalid token. Please log in again!", 401);

const jwt_handleTokenExpiredError = (error: AppError & TokenExpiredError) =>
  new AppError("Token is expired. Please log in again!", 401);

const db_handleCastError = (err: AppError & CastError) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const db_handleValidationError = (err: AppError & MongoServerError) => {
  const message = Object.values(err.errors)
    .map((el: any) => el.properties.message)
    .join("; ");
  return new AppError(message, 400);
};

const db_handleDuplicateFieldError = (err: AppError & MongoServerError) => {
  const value = err.errorResponse.errmsg
    ?.match(/(["'])(?:(?=(\\?))\2.)*?\1/)
    ?.at(0);
  const message = `Duplicate field value: ${value}. Please use another value.`;
  return new AppError(message, 400);
};

const sendErrorDev = (err: AppError, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};
const sendErrorProd = (err: AppError, res: Response) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error(err);

    res.status(500).json({
      status: "error",
      message: "Something went wrong",
    });
  }
};

export default (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    let error = { ...err };
    if (error.name === "CastError")
      error = db_handleCastError(error as AppError & CastError);
    if ((error as AppError & MongoServerError).code === 11000)
      error = db_handleDuplicateFieldError(
        error as AppError & MongoServerError,
      );
    if ((error as AppError & MongoServerError).errors)
      error = db_handleValidationError(error as AppError & MongoServerError);
    if ((error as AppError & JsonWebTokenError).name === "JsonWebTokenError")
      error = jwt_handleSignatureError(error as AppError & JsonWebTokenError);
    if ((error as AppError & TokenExpiredError).name === "TokenExpiredError")
      error = jwt_handleTokenExpiredError(
        error as AppError & TokenExpiredError,
      );

    sendErrorProd(error, res);
  }
};
