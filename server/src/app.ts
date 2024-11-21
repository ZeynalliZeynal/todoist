import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import taskRouter from "./router/taskRouter";
import templateRouter from "./router/templateRouter";
import AppError from "./utils/appError";
import globalErrorHandler from "./controller/errorController";
import authRouter from "./router/authRouter";

const app = express();

app.use(express.json());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/tasks", taskRouter);
app.use("/api/v1/templates", templateRouter);
app.use("/api/v1/auth", authRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) =>
  next(new AppError(`${req.originalUrl} not found`, 404)),
);

app.use(globalErrorHandler);

export default app;
