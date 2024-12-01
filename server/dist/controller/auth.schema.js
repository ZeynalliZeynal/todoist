"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupSchema = exports.loginSchema = exports.emailSchema = void 0;
const zod_1 = require("zod");
exports.emailSchema = zod_1.z.string().email().min(1).max(255).trim();
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string().email().min(1).max(255).trim(),
    password: zod_1.z.string().min(8).max(255),
    userAgent: zod_1.z.string().optional(),
});
exports.signupSchema = exports.loginSchema
    .extend({
    name: zod_1.z.string().min(1).max(50).trim(),
    confirmPassword: zod_1.z.string().min(1),
})
    .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});
