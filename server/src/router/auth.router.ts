import express from "express";
import {
  forgotPassword,
  login,
  logout,
  refreshToken,
  resetPassword,
  signup,
  updatePassword,
  verifyAuth,
} from "../controller/auth.controller";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh", refreshToken);
router.post("/forgot-password", forgotPassword);
router.patch("/reset-password/:token", resetPassword);
router.patch("/update-password", verifyAuth, updatePassword);

export default router;
