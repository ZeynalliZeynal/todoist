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
exports.resetPassword = exports.forgotPassword = exports.updatePassword = exports.authorizeTo = exports.verifyAuth = exports.login = exports.signup = void 0;
const user_model_1 = __importDefault(require("../model/user.model"));
const catch_async_1 = __importDefault(require("../utils/catch-async"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app_error_1 = __importDefault(require("../utils/app-error"));
const email_1 = __importDefault(require("../utils/email"));
const crypto_1 = __importDefault(require("crypto"));
const signToken = (id) => jsonwebtoken_1.default.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
});
const createSendToken = (user, statusCode, res) => {
    const token = signToken(user.id);
    res.status(statusCode).json({
        status: "success",
        token,
    });
};
const verifyToken = (token, secret) => {
    return new Promise((resolve, reject) => {
        jsonwebtoken_1.default.verify(token, secret, (err, decoded) => {
            if (err) {
                return reject(err);
            }
            resolve(decoded);
        });
    });
};
exports.signup = (0, catch_async_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        passwordConfirm: req.body.passwordConfirm,
        role: req.body.email === process.env.ADMIN_EMAIL ? "admin" : "user",
    });
    createSendToken(user, 200, res);
}));
exports.login = (0, catch_async_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password)
        return next(new app_error_1.default("Email and password are required", 400));
    const user = yield user_model_1.default.findOne({
        email,
    }).select("+password");
    if (!user || !(yield user.isPasswordCorrect(password, user.password)))
        return next(new app_error_1.default("Email or password is incorrect", 404));
    const token = signToken(user.id);
    res.status(200).json({
        status: "success",
        token,
    });
}));
exports.verifyAuth = (0, catch_async_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    if (req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer "))
        token = req.headers.authorization.split(" ").at(1);
    if (!token)
        return next(new app_error_1.default("You must log in to perform this action", 401));
    const decoded = yield verifyToken(token, process.env.JWT_SECRET);
    const currentUser = yield user_model_1.default.findById(decoded.id);
    if (!currentUser)
        return next(new app_error_1.default("Token is no longer belong to this user. Please log in again", 401));
    if (currentUser.isPasswordChangedAfter(decoded.iat))
        return next(new app_error_1.default("Password recently changed. Please log in again", 401));
    req.user = currentUser;
    next();
}));
const authorizeTo = (roles) => (0, catch_async_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.user || !roles.includes(req.user.role)) {
        return next(new app_error_1.default("You do not have permission to perform this action.", 403));
    }
    next();
}));
exports.authorizeTo = authorizeTo;
exports.updatePassword = (0, catch_async_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield user_model_1.default.findById(req.user.id).select("+password");
    if (!user)
        return next(new app_error_1.default("You are not logged in.", 401));
    if (!(yield user.isPasswordCorrect(req.body.passwordCurrent, user.password)))
        return next(new app_error_1.default("Your password is wrong.", 401));
    user.password = req.body.password;
    user.passwordConfirm = req.body.passwordConfirm;
    yield user.save();
    createSendToken(user, 200, res);
    next();
}));
exports.forgotPassword = (0, catch_async_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
exports.resetPassword = (0, catch_async_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
    user.passwordConfirm = req.body.passwordConfirm;
    user.resetPasswordExpires = undefined;
    user.resetPasswordToken = undefined;
    yield user.save();
    createSendToken(user, 200, res);
}));
