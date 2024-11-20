import express from "express";
import morgan from "morgan";
import taskRouter from "./router/taskRouter";
import templateRouter from "./router/templateRouter";

const app = express();

app.use(express.json());

app.use(morgan("dev"));

app.use("/api/v1/tasks", taskRouter);
app.use("/api/v1/templates", templateRouter);

export default app;
