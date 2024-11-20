import { NextFunction, Request, Response } from "express";
import Template from "../model/templateModel";
import ApiFeatures from "../utils/apiFeatures";

const getTemplates = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const features = new ApiFeatures(Template.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

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

const getTemplate = async (req: Request, res: Response, next: NextFunction) => {
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

const createTemplate = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const template = await Template.create({
      name: req.body.name,
      description: req.body.description,
      content: req.body.content,
      exampleUrl: req.body.exampleUrl,
      tags: req.body.tags,
      imageUrl: req.body.imageUrl,
      category: req.body.category,
    });
    res.status(201).json({
      status: "success",
      data: {
        template,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error,
    });
  }
};

export { getTemplates, getTemplate, createTemplate };
