import ApiFeatures from "../utils/apiFeatures";
import Task from "../model/taskModel";
import { NextFunction, Request, Response } from "express";

const convertFromKebab = (str: string) => str.split("-").join(" ");

const getTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const features = new ApiFeatures(Task.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const tasks = await features.query;

    res.status(302).json({
      status: "success",
      data: {
        tasks,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

const getTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await Task.findById(req.params.id);
    res.status(302).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

const createTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  const { body } = req;
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      {
        ...body,
        updatedAt: Date.now(),
      },
      {
        new: true,
        runValidators: true,
      },
    );
    res.status(200).json({
      status: "success",
      data: {
        task,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

const deleteTask = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

const clearTasks = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const task = await Task.deleteMany();
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export { createTask, updateTask, clearTasks, getTasks, getTask, deleteTask };
