import express from "express";
import {
  forgotPassword,
  login,
  resetPassword,
  signup,
} from "../controller/authController";

const router = express.Router();

router.post("/sign-up", signup);
router.post("/log-in", login);
router.post("/forgot-password", forgotPassword);
router.patch("/reset-password/:token", resetPassword);

export default router;
