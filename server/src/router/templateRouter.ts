import express from "express";
import {
  createTemplate,
  getTemplate,
  getTemplates,
} from "../controller/templateController";
import { authorizeTo } from "../controller/authController";

const router = express.Router();

router
  .route("/")
  .get(getTemplates)
  .post(authorizeTo(["admin"]), createTemplate);

router.route("/:id").get(getTemplate);

export default router;
