"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var task_controller_1 = require("../controller/task.controller");
var auth_controller_1 = require("../controller/auth.controller");
var router = express_1.default.Router();
router.param("id", function (req, res, next, value, name) {
    console.log(value);
    next();
});
router
    .route("/")
    .get(auth_controller_1.verifyAuth, task_controller_1.getTasks)
    .post(auth_controller_1.verifyAuth, task_controller_1.createTask)
    .delete(auth_controller_1.verifyAuth, task_controller_1.clearTasks);
router
    .route("/:id")
    .get(auth_controller_1.verifyAuth, task_controller_1.getTask)
    .patch(auth_controller_1.verifyAuth, task_controller_1.updateTask)
    .delete(auth_controller_1.verifyAuth, task_controller_1.deleteTask);
exports.default = router;
