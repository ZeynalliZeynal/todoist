"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const taskController_1 = require("../controller/taskController");
const router = express_1.default.Router();
router.param("id", (req, res, next, value, name) => {
    console.log(value);
    next();
});
router.route("/").get(taskController_1.getTasks).post(taskController_1.createTask).delete(taskController_1.clearTasks);
router.route("/:id").get(taskController_1.getTask).patch(taskController_1.updateTask).delete(taskController_1.deleteTask);
exports.default = router;
