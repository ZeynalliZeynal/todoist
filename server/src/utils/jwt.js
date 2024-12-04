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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.signToken = exports.refreshTokenSignOptions = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var env_1 = require("../constants/env");
var defaults = {
    audience: ["user"],
};
var accessTokenSignOptions = {
    expiresIn: env_1.jwt_expires_in,
    secret: env_1.jwt_secret,
};
exports.refreshTokenSignOptions = {
    expiresIn: env_1.jwt_refresh_expires_in,
    secret: env_1.jwt_refresh_secret,
};
var signToken = function (payload, options) {
    var _a = options || accessTokenSignOptions, secret = _a.secret, signOptions = __rest(_a, ["secret"]);
    return jsonwebtoken_1.default.sign(payload, secret, __assign(__assign({}, signOptions), defaults));
};
exports.signToken = signToken;
var verifyToken = function (token, options) {
    var _a = options || {}, _b = _a.secret, secret = _b === void 0 ? env_1.jwt_secret : _b, verifyOptions = __rest(_a, ["secret"]);
    console.log(token, secret);
    try {
        var payload = jsonwebtoken_1.default.verify(token, secret, __assign(__assign({}, defaults), verifyOptions));
        return {
            payload: payload,
        };
    }
    catch (error) {
        return {
            error: error.message,
        };
    }
};
exports.verifyToken = verifyToken;
