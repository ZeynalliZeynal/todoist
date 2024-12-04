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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyEmail = exports.refreshUserAccessToken = exports.loginUser = exports.createAccount = void 0;
var user_model_1 = require("../model/user.model");
var env_1 = require("../constants/env");
var session_model_1 = require("../model/session.model");
var app_assert_1 = require("../utils/app-assert");
var http_status_codes_1 = require("http-status-codes");
var jwt_1 = require("../utils/jwt");
var app_error_1 = require("../utils/app-error");
var email_1 = require("../utils/email");
var email_templates_1 = require("../utils/email-templates");
var date_fns_1 = require("date-fns");
var jsonwebtoken_1 = require("jsonwebtoken");
var createAccount = function (data) { return __awaiter(void 0, void 0, void 0, function () {
    var existingUser, user, verificationToken, url, err_1, session, sessionInfo, refreshToken, accessToken;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, user_model_1.default.exists({
                    email: data.email,
                })];
            case 1:
                existingUser = _a.sent();
                (0, app_assert_1.default)(!existingUser, "Email already in use", http_status_codes_1.StatusCodes.CONFLICT);
                return [4 /*yield*/, user_model_1.default.create({
                        name: data.name,
                        email: data.email,
                        password: data.password,
                        confirmPassword: data.confirmPassword,
                        role: env_1.admin_email === data.email ? "admin" : "user",
                    })];
            case 2:
                user = _a.sent();
                verificationToken = jsonwebtoken_1.default.sign({ userId: user._id }, env_1.jwt_verify_secret, {
                    expiresIn: env_1.jwt_verify_expires_in,
                });
                url = "".concat(env_1.client_dev_origin, "/auth/email/verify/").concat(verificationToken);
                _a.label = 3;
            case 3:
                _a.trys.push([3, 5, , 6]);
                return [4 /*yield*/, (0, email_1.sendMail)(__assign({ to: [user.email] }, (0, email_templates_1.verifyEmailTemplate)(url)))];
            case 4:
                _a.sent();
                return [3 /*break*/, 6];
            case 5:
                err_1 = _a.sent();
                throw new app_error_1.default("Error occurred sending an email", http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
            case 6: return [4 /*yield*/, session_model_1.default.create({
                    userId: user.id,
                    userAgent: data.userAgent,
                })];
            case 7:
                session = _a.sent();
                sessionInfo = {
                    sessionId: session._id,
                };
                refreshToken = (0, jwt_1.signToken)(sessionInfo, jwt_1.refreshTokenSignOptions);
                accessToken = (0, jwt_1.signToken)(__assign({ userId: user._id }, sessionInfo));
                return [2 /*return*/, {
                        user: user,
                        accessToken: accessToken,
                        refreshToken: refreshToken,
                    }];
        }
    });
}); };
exports.createAccount = createAccount;
var loginUser = function (_a) { return __awaiter(void 0, [_a], void 0, function (_b) {
    var user, isPasswordValid, userId, session, sessionInfo, refreshToken, accessToken;
    var email = _b.email, password = _b.password, userAgent = _b.userAgent;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0: return [4 /*yield*/, user_model_1.default.findOne({ email: email }).select("+password")];
            case 1:
                user = _c.sent();
                (0, app_assert_1.default)(user, "Email or password is incorrect", http_status_codes_1.StatusCodes.UNAUTHORIZED);
                return [4 /*yield*/, user.comparePasswords(password, user.password)];
            case 2:
                isPasswordValid = _c.sent();
                (0, app_assert_1.default)(isPasswordValid, "Invalid email or password", http_status_codes_1.StatusCodes.UNAUTHORIZED);
                userId = user.id;
                return [4 /*yield*/, session_model_1.default.create({
                        userId: userId,
                        userAgent: userAgent,
                    })];
            case 3:
                session = _c.sent();
                sessionInfo = {
                    sessionId: session._id,
                };
                refreshToken = (0, jwt_1.signToken)(sessionInfo, jwt_1.refreshTokenSignOptions);
                accessToken = (0, jwt_1.signToken)(__assign(__assign({}, sessionInfo), { userId: userId }));
                // return user & tokens
                return [2 /*return*/, {
                        user: user,
                        accessToken: accessToken,
                        refreshToken: refreshToken,
                    }];
        }
    });
}); };
exports.loginUser = loginUser;
var refreshUserAccessToken = function (token) { return __awaiter(void 0, void 0, void 0, function () {
    var payload, session, sessionNeedsRefresh, newRefreshToken, accessToken;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                payload = (0, jwt_1.verifyToken)(token, {
                    secret: env_1.jwt_refresh_secret,
                }).payload;
                if (!payload)
                    throw new app_error_1.default("Invalid token", http_status_codes_1.StatusCodes.UNAUTHORIZED);
                return [4 /*yield*/, session_model_1.default.findById(payload.sessionId)];
            case 1:
                session = _a.sent();
                if (!session && session.expiresAt.getTime() > Date.now())
                    throw new app_error_1.default("Session expired", http_status_codes_1.StatusCodes.UNAUTHORIZED);
                sessionNeedsRefresh = session.expiresAt.getTime() - Date.now() <= 24 * 60 * 60 * 1000;
                if (!sessionNeedsRefresh) return [3 /*break*/, 3];
                session.expiresAt = (0, date_fns_1.addDays)(new Date(), 30);
                return [4 /*yield*/, session.save()];
            case 2:
                _a.sent();
                _a.label = 3;
            case 3:
                newRefreshToken = sessionNeedsRefresh
                    ? (0, jwt_1.signToken)({
                        sessionId: session._id,
                    }, jwt_1.refreshTokenSignOptions)
                    : undefined;
                accessToken = (0, jwt_1.signToken)({
                    userId: session.userId,
                    sessionId: session._id,
                });
                return [2 /*return*/, {
                        accessToken: accessToken,
                        newRefreshToken: newRefreshToken,
                    }];
        }
    });
}); };
exports.refreshUserAccessToken = refreshUserAccessToken;
var verifyEmail = function (token) { return __awaiter(void 0, void 0, void 0, function () {
    var decoded, userId, updatedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                decoded = jsonwebtoken_1.default.verify(token, env_1.jwt_verify_secret);
                if (!decoded)
                    throw new app_error_1.default("Invalid or expired token", http_status_codes_1.StatusCodes.UNAUTHORIZED);
                userId = decoded.userId;
                return [4 /*yield*/, user_model_1.default.findByIdAndUpdate(userId, {
                        verified: true,
                    }, { new: true })];
            case 1:
                updatedUser = _a.sent();
                if (!updatedUser)
                    throw new app_error_1.default("User not found", http_status_codes_1.StatusCodes.UNAUTHORIZED);
                if (updatedUser.verified)
                    throw new app_error_1.default("You are already verified", http_status_codes_1.StatusCodes.BAD_REQUEST);
                return [2 /*return*/, {
                        user: updatedUser,
                    }];
        }
    });
}); };
exports.verifyEmail = verifyEmail;
