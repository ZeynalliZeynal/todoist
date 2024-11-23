"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("../controller/auth.controller");
const router = express_1.default.Router();
router.post("/sign-up", auth_controller_1.signup);
router.post("/log-in", auth_controller_1.login);
router.post("/forgot-password", auth_controller_1.forgotPassword);
router.patch("/reset-password/:token", auth_controller_1.resetPassword);
router.patch("/update-password", auth_controller_1.verifyAuth, auth_controller_1.updatePassword);
exports.default = router;
