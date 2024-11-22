import express from "express";
import {
  clearTasks,
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controller/taskController";
import { verifyAuth } from "../controller/authController";

const router = express.Router();

router.param("id", (req, res, next, value, name) => {
  console.log(value);
  next();
});

router
  .route("/")
  .get(verifyAuth, getTasks)
  .post(verifyAuth, createTask)
  .delete(verifyAuth, clearTasks);

router
  .route("/:id")
  .get(verifyAuth, getTask)
  .patch(verifyAuth, updateTask)
  .delete(verifyAuth, deleteTask);

export default router;
