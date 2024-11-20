import express from "express";
import {
  createTemplate,
  getTemplate,
  getTemplates,
} from "../controller/templateController";

const router = express.Router();

router.route("/").get(getTemplates).post(createTemplate);

router.route("/:id").get(getTemplate);

export default router;
