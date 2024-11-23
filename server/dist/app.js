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
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const helmet_1 = __importDefault(require("helmet"));
const express_mongo_sanitize_1 = __importDefault(require("express-mongo-sanitize"));
const hpp_1 = __importDefault(require("hpp"));
const app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, express_mongo_sanitize_1.default)());
app.use((0, hpp_1.default)());
if (process.env.NODE_ENV === "development") {
    app.use((0, morgan_1.default)("dev"));
}
const limiter = (0, express_rate_limit_1.default)({
    limit: 100,
    windowMs: 60 * 60 * 1000,
    message: "Too many requests from this IP. Please try again in an hour!",
});
app.use("/api", limiter);
app.use(express_1.default.json({
    limit: "10mb",
}));
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
