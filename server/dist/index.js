"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = __importDefault(require("./app"));
dotenv_1.default.config({ path: "./config.env" });
const PORT = process.env.PORT || 8000;
const DB = process.env.DATABASE.replace("<db_password>", process.env.DATABASE_PASSWORD);
mongoose_1.default
    .connect(DB)
    .then((con) => console.log("Connection to database successful"));
app_1.default.listen(PORT, () => {
    console.log(`[${process.env.NODE_ENV}] Server is running on port ${PORT}`);
});
