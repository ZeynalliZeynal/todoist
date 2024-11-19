import express from "express";
import { getTemplate, getTemplates } from "../controller/templateController";

const router = express.Router();

router.param("id", (req, res, next, value, name) => {
  console.log(value);
  next();
});

router.route("/").get(getTemplates);

router.route("/:id").get(getTemplate);

export default router;
