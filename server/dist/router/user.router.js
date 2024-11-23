"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../controller/user.controller");
const auth_controller_1 = require("../controller/auth.controller");
const router = express_1.default.Router();
router.get("/", auth_controller_1.verifyAuth, (0, auth_controller_1.authorizeTo)(["admin"]), user_controller_1.getAllUsers);
router.get("/:id", auth_controller_1.verifyAuth, (0, auth_controller_1.authorizeTo)(["admin"]), user_controller_1.getUser);
router.patch("/update-data", auth_controller_1.verifyAuth, user_controller_1.client_updateUser);
exports.default = router;
