"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.forgotPassword = exports.updatePassword = exports.authorizeTo = exports.refreshToken = exports.verifyAuth = exports.verifyEmailController = exports.logout = exports.login = exports.signup = void 0;
const user_model_1 = __importDefault(require("../model/user.model"));
const catch_errors_1 = __importDefault(require("../utils/catch-errors"));
const catch_errors_2 = __importDefault(require("../utils/catch-errors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app_error_1 = __importDefault(require("../utils/app-error"));
const email_1 = __importDefault(require("../utils/email"));
const crypto_1 = __importDefault(require("crypto"));
const env_1 = require("../constants/env");
const auth_schema_1 = require("../validator/auth.schema");
const auth_service_1 = require("../service/auth.service");
const http_status_codes_1 = require("http-status-codes");
const cookies_1 = require("../utils/cookies");
const jwt_1 = require("../utils/jwt");
const session_model_1 = __importDefault(require("../model/session.model"));
const app_assert_1 = __importDefault(require("../utils/app-assert"));
const signToken = (id) => jsonwebtoken_1.default.sign({ id }, env_1.jwt_secret, {
    expiresIn: env_1.jwt_expires_in,
});
const createSendToken = (user, statusCode, res) => {
    const token = signToken(user.id);
    res.cookie("jwt", token, {
        expires: new Date(Date.now() + Number(env_1.jwt_cookie_expires_in) * 24 * 60 * 60 * 1000),
        secure: env_1.node_env === "production",
        httpOnly: true,
        sameSite: "lax",
    });
    res.status(statusCode).json({
        status: "success",
        token,
        user: {
            name: user.name,
            email: user.email,
            photo: user.photo,
            createdAt: user.createdAt,
            updatedAt: user.updatedAt,
        },
    });
};
exports.signup = (0, catch_errors_2.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const request = auth_schema_1.signupSchema.parse(Object.assign(Object.assign({}, req.body), { userAgent: req.headers["user-agent"] }));
    const { refreshToken, accessToken, user } = yield (0, auth_service_1.createAccount)(request);
    return (0, cookies_1.setAuthCookies)({ res, refreshToken, accessToken })
        .status(http_status_codes_1.StatusCodes.OK)
        .json({
        status: "success",
        data: {
            name: user.name,
            email: user.email,
            createdAt: user.createdAt,
            photo: user.photo,
        },
    });
}));
exports.login = (0, catch_errors_2.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const request = auth_schema_1.loginSchema.parse(Object.assign(Object.assign({}, req.body), { userAgent: req.headers["user-agent"] }));
    const { accessToken, refreshToken } = yield (0, auth_service_1.loginUser)(request);
    return (0, cookies_1.setAuthCookies)({ res, refreshToken, accessToken })
        .status(http_status_codes_1.StatusCodes.OK)
        .json({
        status: "success",
        message: "Login successful",
    });
}));
exports.logout = (0, catch_errors_2.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const accessToken = req.cookies.accessToken;
    const { payload } = (0, jwt_1.verifyToken)(accessToken);
    if (payload)
        yield session_model_1.default.findByIdAndDelete(payload.sessionId);
    return (0, cookies_1.clearAuthCookies)(res).status(http_status_codes_1.StatusCodes.OK).json({
        status: "success",
        message: "Logout successful",
    });
}));
exports.verifyEmailController = (0, catch_errors_2.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const verificationCode = auth_schema_1.verificationCodeSchema.parse(req.params.code);
    yield (0, auth_service_1.verifyEmail)(verificationCode);
    return res.status(http_status_codes_1.StatusCodes.OK).json({
        message: "Email was successfully verified",
    });
}));
exports.verifyAuth = (0, catch_errors_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.cookies.accessToken;
    if (!token)
        return next(new app_error_1.default("You must log in to perform this action", 401));
    const { payload } = (0, jwt_1.verifyToken)(token);
    if (!payload)
        return next(new app_error_1.default("Invalid token", http_status_codes_1.StatusCodes.UNAUTHORIZED));
    const currentUser = yield user_model_1.default.findById(payload.userId).select("+role -__v");
    if (!currentUser)
        return next(new app_error_1.default("Token is no longer belong to this user. Please log in again", http_status_codes_1.StatusCodes.UNAUTHORIZED));
    if (!currentUser.isVerified())
        return next(new app_error_1.default("Please verify your email", http_status_codes_1.StatusCodes.UNAUTHORIZED));
    if (currentUser.isPasswordChangedAfter(payload.iat))
        return next(new app_error_1.default("Password recently changed. Please log in again", http_status_codes_1.StatusCodes.UNAUTHORIZED));
    req.user = currentUser;
    next();
}));
exports.refreshToken = (0, catch_errors_2.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const refreshToken = req.cookies.refreshToken;
    (0, app_assert_1.default)(refreshToken, "Missing refresh token", http_status_codes_1.StatusCodes.UNAUTHORIZED);
    const { newRefreshToken, accessToken } = yield (0, auth_service_1.refreshUserAccessToken)(refreshToken);
    if (newRefreshToken) {
        res.cookie("refreshToken", newRefreshToken, (0, cookies_1.getRefreshTokenCookieOptions)());
    }
    return res
        .status(http_status_codes_1.StatusCodes.OK)
        .cookie("accessToken", accessToken, (0, cookies_1.getAccessTokenCookieOptions)())
        .json({
        status: "success",
        message: "Access token refreshed",
    });
}));
const authorizeTo = (roles) => (0, catch_errors_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user || !roles.includes(req.user.role)) {
        return next(new app_error_1.default("You do not have permission to perform this action.", 403));
    }
    next();
}));
exports.authorizeTo = authorizeTo;
exports.updatePassword = (0, catch_errors_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findById(req.user.id).select("+password");
    if (!user)
        return next(new app_error_1.default("You are not logged in.", 401));
    if (!(yield user.comparePasswords(req.body.passwordCurrent, user.password)))
        return next(new app_error_1.default("Your password is wrong.", 401));
    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;
    yield user.save();
    createSendToken(user, 200, res);
    next();
}));
exports.forgotPassword = (0, catch_errors_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findOne({ email: req.body.email });
    if (!user)
        return next(new app_error_1.default("No user with this email.", 404));
    const resetToken = user.createResetPasswordToken();
    yield user.save({
        validateBeforeSave: false,
    });
    const resetURL = `${req.protocol}://${req.get("host")}/api/v1/auth/reset-password/${resetToken}`;
    const message = `Reset your password by sending a PATCH request with your new password to ${resetURL}.`;
    try {
        yield (0, email_1.default)({
            email: user.email,
            subject: "Your password reset token valid for 10 mins",
            from: "TodoistNEXT <todoist@next.app>",
            message,
        });
        res.status(200).json({
            status: "success",
            message: "Check your email.",
        });
    }
    catch (err) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpires = undefined;
        yield user.save({ validateBeforeSave: false });
        return next(new app_error_1.default("Failed to send the token to your email.", 500));
    }
}));
exports.resetPassword = (0, catch_errors_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedToken = crypto_1.default
        .createHash("sha256")
        .update(req.params.token)
        .digest("hex");
    const user = yield user_model_1.default.findOne({
        resetPasswordToken: hashedToken,
        resetPasswordExpires: {
            $gte: Date.now(),
        },
    });
    if (!user)
        return next(new app_error_1.default("Token is invalid or has expired. Try again.", 400));
    user.password = req.body.password;
    user.confirmPassword = req.body.confirmPassword;
    user.resetPasswordExpires = undefined;
    user.resetPasswordToken = undefined;
    yield user.save();
    createSendToken(user, 200, res);
}));
