"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const taskRouter_1 = __importDefault(require("./router/taskRouter"));
const templateRouter_1 = __importDefault(require("./router/templateRouter"));
const app = (0, express_1.default)();
if (process.env.NODE_ENV === "development") {
    app.use(express_1.default.json());
}
app.use((0, morgan_1.default)("dev"));
app.use("/api/v1/tasks", taskRouter_1.default);
app.use("/api/v1/templates", templateRouter_1.default);
exports.default = app;
