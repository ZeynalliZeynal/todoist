"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearAuthCookies = exports.setAuthCookies = exports.getRefreshTokenCookieOptions = exports.getAccessTokenCookieOptions = exports.refresh_path = void 0;
var env_1 = require("../constants/env");
var date_fns_1 = require("date-fns");
exports.refresh_path = "/api/v1/auth/refresh";
var secure = env_1.node_env !== "development";
var defaults = {
    sameSite: "strict",
    httpOnly: true,
    secure: secure,
};
var getAccessTokenCookieOptions = function () { return (__assign(__assign({}, defaults), { expires: (0, date_fns_1.addMinutes)(new Date(), 15) })); };
exports.getAccessTokenCookieOptions = getAccessTokenCookieOptions;
var getRefreshTokenCookieOptions = function () { return (__assign(__assign({}, defaults), { expires: (0, date_fns_1.addDays)(new Date(), 30), path: exports.refresh_path })); };
exports.getRefreshTokenCookieOptions = getRefreshTokenCookieOptions;
var setAuthCookies = function (_a) {
    var res = _a.res, accessToken = _a.accessToken, refreshToken = _a.refreshToken;
    return res
        .cookie("accessToken", accessToken, (0, exports.getAccessTokenCookieOptions)())
        .cookie("refreshToken", refreshToken, (0, exports.getRefreshTokenCookieOptions)());
};
exports.setAuthCookies = setAuthCookies;
var clearAuthCookies = function (res) {
    return res.clearCookie("accessToken").clearCookie("refreshToken", {
        path: exports.refresh_path,
    });
};
exports.clearAuthCookies = clearAuthCookies;
