"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const app_error_1 = __importDefault(require("../utils/app-error"));
const zod_1 = require("zod");
const http_status_codes_1 = require("http-status-codes");
const cookies_1 = require("../utils/cookies");
const handleZodError = (res, error) => {
    const errors = error.issues.map((err) => ({
        path: err.path.join("."),
        message: err.message,
    }));
    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
        errors,
        message: error.message,
    });
};
const handleAppError = (res, error) => res.status(error.statusCode).json({
    status: "fail",
    message: error.message,
    errorCode: error.errorCode,
});
const handleDuplicateValueError = (res, error) => {
    var _a, _b;
    const value = (_b = (_a = error.errorResponse.errmsg) === null || _a === void 0 ? void 0 : _a.match(/(["'])(?:(?=(\\?))\2.)*?\1/)) === null || _b === void 0 ? void 0 : _b.at(0);
    const message = `Duplicate field value: ${value}. Please use another value.`;
    res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).json({
        status: "fail",
        message,
    });
};
const errorHandler = (err, req, res, next) => {
    console.log(err);
    if (req.path === cookies_1.refresh_path)
        (0, cookies_1.clearAuthCookies)(res);
    if (err instanceof zod_1.z.ZodError) {
        handleZodError(res, err);
    }
    if (err instanceof app_error_1.default) {
        handleAppError(res, err);
    }
    if (err.code == 11000) {
        handleDuplicateValueError(res, err);
    }
    return res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).json({
        status: "error",
        message: "Initial server error",
    });
};
exports.errorHandler = errorHandler;
