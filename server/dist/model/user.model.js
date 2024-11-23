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
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const crypto_1 = __importDefault(require("crypto"));
const schema = new mongoose_1.default.Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
    },
    name: {
        type: String,
        trim: true,
        required: [true, "Name is required"],
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: [true, "Email is required"],
        lowercase: true,
        validate: [validator_1.default.isEmail, "Your email is not a valid"],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters"],
        select: false,
    },
    passwordConfirm: {
        type: String,
        required: [true, "Please confirm your password"],
        validate: {
            // * works only on save
            validator: function (value) {
                return value === this.password;
            },
            message: "Passwords must match",
        },
    },
    passwordChangedAt: Date,
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
    },
    photo: String,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
});
schema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!this.isModified("password"))
            return next();
        this.password = yield bcryptjs_1.default.hash(this.password, 12);
        this.passwordConfirm = undefined;
        next();
    });
});
schema.pre("save", function (next) {
    if (!this.isModified("password") || this.isNew)
        return next();
    this.passwordChangedAt = Date.now() - 1000;
    next();
});
schema.method("isPasswordCorrect", function (candidatePassword, userPassword) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield bcryptjs_1.default.compare(candidatePassword, userPassword);
    });
});
schema.method("isPasswordChangedAfter", function (JWTTimestamp) {
    if (this.passwordChangedAt) {
        const changedTimestamp = parseInt(String(new Date(this.passwordChangedAt).getTime() / 1000), 10);
        return JWTTimestamp < changedTimestamp;
    }
    return false;
});
schema.method("createResetPasswordToken", function () {
    const resetToken = crypto_1.default.randomBytes(32).toString("hex");
    this.resetPasswordToken = crypto_1.default
        .createHash("sha256")
        .update(resetToken)
        .digest("hex");
    this.resetPasswordExpires = Date.now() + 10 * 60 * 1000;
    return resetToken;
});
exports.default = mongoose_1.default.model("User", schema);