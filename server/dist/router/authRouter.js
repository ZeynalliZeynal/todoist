"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../controller/authController");
const router = express_1.default.Router();
router.post("/sign-up", authController_1.signup);
router.post("/log-in", authController_1.login);
router.post("/forgot-password", authController_1.forgotPassword);
router.patch("/reset-password/:token", authController_1.resetPassword);
router.patch("/update-password", authController_1.verifyAuth, authController_1.updatePassword);
exports.default = router;
