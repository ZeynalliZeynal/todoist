import express from "express";
import {
  forgotPassword,
  login,
  resetPassword,
  signup,
  updatePassword,
  verifyAuth,
} from "../controller/authController";

const router = express.Router();

router.post("/sign-up", signup);
router.post("/log-in", login);
router.post("/forgot-password", forgotPassword);
router.patch("/reset-password/:token", resetPassword);
router.patch("/update-password", verifyAuth, updatePassword);

export default router;
