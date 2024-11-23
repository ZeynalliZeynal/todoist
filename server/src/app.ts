import express, { NextFunction, Request, Response } from "express";
import morgan from "morgan";
import taskRouter from "./router/task.router";
import templateRouter from "./router/template.router";
import AppError from "./utils/app-error";
import globalErrorHandler from "./controller/error.controller";
import authRouter from "./router/auth.router";
import userRouter from "./router/user.router";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";
import hpp from "hpp";

const app = express();

app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const limiter = rateLimit({
  limit: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP. Please try again in an hour!",
});

app.use("/api", limiter);

app.use(
  express.json({
    limit: "10mb",
  }),
);

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.headers);
  next();
});

app.use("/api/v1/tasks", taskRouter);
app.use("/api/v1/templates", templateRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);

app.all("*", (req: Request, res: Response, next: NextFunction) =>
  next(new AppError(`${req.originalUrl} not found`, 404)),
);

app.use(globalErrorHandler);

export default app;
