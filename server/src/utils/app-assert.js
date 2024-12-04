"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var node_assert_1 = require("node:assert");
var app_error_1 = require("./app-error");
/**
 * Asserts a condition and throws an AppError if the condition is falsy
 */
var appAssert = function (condition, message, httpStatusCode, appErrorCode) { return (0, node_assert_1.default)(condition, new app_error_1.default(message, httpStatusCode, appErrorCode)); };
exports.default = appAssert;
