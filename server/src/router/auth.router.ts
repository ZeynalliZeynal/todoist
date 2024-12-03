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
  verifyEmailController,
} from "../controller/auth.controller";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh", refreshToken);
router.post("/email/verify/:code", verifyEmailController);
router.post("/password/forgot", verifyAuth, forgotPassword);
router.patch("/password/reset/:token", resetPassword);
router.patch("/password/update", verifyAuth, updatePassword);

export default router;
