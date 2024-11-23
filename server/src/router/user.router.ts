import express from "express";
import {
  client_updateUser,
  getAllUsers,
  getUser,
} from "../controller/user.controller";
import { authorizeTo, verifyAuth } from "../controller/auth.controller";

const router = express.Router();

router.get("/", verifyAuth, authorizeTo(["admin"]), getAllUsers);

router.get("/:id", verifyAuth, authorizeTo(["admin"]), getUser);

router.patch("/update-data", verifyAuth, client_updateUser);
export default router;