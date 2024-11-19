import express from "express";
import {
  clearTasks,
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controller/taskController";

const router = express.Router();

router.param("id", (req, res, next, value, name) => {
  console.log(value);
  next();
});

router.route("/").get(getTasks).post(createTask).delete(clearTasks);

router.route("/:id").get(getTask).patch(updateTask).delete(deleteTask);

export default router;
