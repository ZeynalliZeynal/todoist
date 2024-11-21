"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
process.on("uncaughtException", (error) => {
    console.log("Uncaught Exception!");
    console.log(error.name, error.message);
    process.exit(1);
});
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
dotenv_1.default.config({ path: "./config.env" });
const PORT = process.env.PORT || 8000;
const DB = process.env.DATABASE.replace("<db_password>", process.env.DATABASE_PASSWORD);
mongoose_1.default
    .connect(DB)
    .then(() => console.log("Connection to database successful"));
const server = app_1.default.listen(PORT, () => {
    console.log(`[${process.env.NODE_ENV}] Server is running on port ${PORT}`);
});
process.on("unhandledRejection", (error) => {
    console.log("Unhandled Rejection!");
    console.log(error.name, error.message);
    server.close(() => {
        console.error("Server is shutdown.");
        process.exit(1);
    });
});
process.on("uncaughtException", (error) => {
    console.log("Uncaught Exception!");
    console.log(error.name, error.message);
    server.close(() => {
        console.error("Server is shutdown.");
        process.exit(1);
    });
});
