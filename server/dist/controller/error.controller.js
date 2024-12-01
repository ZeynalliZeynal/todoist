"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_error_1 = __importDefault(require("../utils/app-error"));
const env_1 = require("../constants/env");
const jwt_handleSignatureError = (error) => new app_error_1.default("Invalid token. Please log in again!", 401);
const jwt_handleTokenExpiredError = (error) => new app_error_1.default("Token is expired. Please log in again!", 401);
const db_handleCastError = (err) => {
    const message = `Invalid ${err.path}: ${err.value}.`;
    return new app_error_1.default(message, 400);
};
const db_handleValidationError = (err) => {
    const message = Object.values(err.errors)
        .map((el) => el.properties.message)
        .join("; ");
    return new app_error_1.default(message, 400);
};
const db_handleDuplicateFieldError = (err) => {
    var _a, _b;
    const value = (_b = (_a = err.errorResponse.errmsg) === null || _a === void 0 ? void 0 : _a.match(/(["'])(?:(?=(\\?))\2.)*?\1/)) === null || _b === void 0 ? void 0 : _b.at(0);
    const message = `Duplicate field value: ${value}. Please use another value.`;
    return new app_error_1.default(message, 400);
};
const sendErrorDev = (err, res) => {
    res.status(err.statusCode).json({
        status: err.status,
        error: err,
        message: err.message,
        stack: err.stack,
    });
};
const sendErrorProd = (err, res) => {
    if (err.isOperational) {
        res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    }
    else {
        console.error(err);
        res.status(500).json({
            status: "error",
            message: "Something went wrong",
        });
    }
};
exports.default = (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || "error";
    if (env_1.node_env === "development") {
        sendErrorDev(err, res);
    }
    else if (env_1.node_env === "production") {
        let error = Object.assign(Object.assign({}, err), { message: err.message });
        if (error.name === "CastError")
            error = db_handleCastError(error);
        if (error.code === 11000)
            error = db_handleDuplicateFieldError(error);
        if (error.errors)
            error = db_handleValidationError(error);
        if (error.name === "JsonWebTokenError")
            error = jwt_handleSignatureError(error);
        if (error.name === "TokenExpiredError")
            error = jwt_handleTokenExpiredError(error);
        sendErrorProd(error, res);
    }
};
