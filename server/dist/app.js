"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const task_router_1 = __importDefault(require("./router/task.router"));
const template_router_1 = __importDefault(require("./router/template.router"));
const app_error_1 = __importDefault(require("./utils/app-error"));
const error_controller_1 = __importDefault(require("./controller/error.controller"));
const auth_router_1 = __importDefault(require("./router/auth.router"));
const user_router_1 = __importDefault(require("./router/user.router"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
if (process.env.NODE_ENV === "development") {
    app.use((0, morgan_1.default)("dev"));
}
app.use((req, res, next) => {
    console.log(req.headers);
    next();
});
app.use("/api/v1/tasks", task_router_1.default);
app.use("/api/v1/templates", template_router_1.default);
app.use("/api/v1/auth", auth_router_1.default);
app.use("/api/v1/users", user_router_1.default);
app.all("*", (req, res, next) => next(new app_error_1.default(`${req.originalUrl} not found`, 404)));
app.use(error_controller_1.default);
exports.default = app;
