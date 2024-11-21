"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const validator_1 = __importDefault(require("validator"));
const schema = new mongoose_1.default.Schema({
    fullName: {
        type: String,
        trim: true,
        required: [true, "Full name is required"],
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        required: [true, "Email is required"],
        lowercase: true,
        validate: [validator_1.default.isEmail, "Your email is not a valid."],
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [8, "Password must be at least 8 characters"],
    },
    passwordConfirm: {
        type: String,
        required: [true, "Please confirm your password"],
    },
    photo: String,
});
exports.default = mongoose_1.default.model("User", schema);
