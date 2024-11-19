import { NextFunction, Request, Response } from "express";
import Template from "../model/templateModel";
import ApiFeatures from "../utils/apiFeatures";

export const getTemplates = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const features = new ApiFeatures(Template.find(), req.query);
    const templates = await features.query;
    res.status(302).json({
      status: "success",
      data: {
        templates,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

export const getTemplate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const template = await Template.findById(req.params.id);
    res.status(302).json({
      status: "success",
      data: {
        template,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};
