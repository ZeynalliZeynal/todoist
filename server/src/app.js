"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var morgan_1 = require("morgan");
var task_router_1 = require("./router/task.router");
var template_router_1 = require("./router/template.router");
var app_error_1 = require("./utils/app-error");
var error_handler_1 = require("./middleware/error-handler");
var auth_router_1 = require("./router/auth.router");
var user_router_1 = require("./router/user.router");
var express_rate_limit_1 = require("express-rate-limit");
var helmet_1 = require("helmet");
var express_mongo_sanitize_1 = require("express-mongo-sanitize");
var hpp_1 = require("hpp");
var cors_1 = require("cors");
var env_1 = require("./constants/env");
var cookie_parser_1 = require("cookie-parser");
var app = (0, express_1.default)();
app.use((0, helmet_1.default)());
app.use((0, express_mongo_sanitize_1.default)());
app.use((0, hpp_1.default)());
app.use((0, morgan_1.default)("dev"));
var limiter = (0, express_rate_limit_1.default)({
    limit: 100,
    windowMs: 60 * 60 * 1000,
    message: "Too many requests from this IP. Please try again in an hour!",
});
app.use("/api", limiter);
app.use(express_1.default.json({
    limit: "10mb",
}));
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: env_1.client_dev_origin,
    credentials: true,
}));
app.use((0, cookie_parser_1.default)());
app.use("/api/v1/tasks", task_router_1.default);
app.use("/api/v1/templates", template_router_1.default);
app.use("/api/v1/auth", auth_router_1.default);
app.use("/api/v1/users", user_router_1.default);
app.all("*", function (req, res, next) {
    return next(new app_error_1.default("".concat(req.originalUrl, " not found"), 404));
});
app.use(error_handler_1.errorHandler);
exports.default = app;
