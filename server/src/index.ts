process.on("uncaughtException", (error: Error) => {
  console.log("Uncaught Exception!");
  console.log(error.name, error.message);
  process.exit(1);
});

import dotenv from "dotenv";
import mongoose, { Error } from "mongoose";
import app from "./app";

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 8000;

const DB = process.env.DATABASE!.replace(
  "<db_password>",
  process.env.DATABASE_PASSWORD!,
);

mongoose
  .connect(DB)
  .then(() => console.log("Connection to database successful"));

const server = app.listen(PORT, () => {
  console.log(`[${process.env.NODE_ENV}] Server is running on port ${PORT}`);
});

process.on("unhandledRejection", (error: Error) => {
  console.log("Unhandled Rejection!");
  console.log(error.name, error.message);
  server.close(() => {
    console.error("Server is shutdown.");
    process.exit(1);
  });
});

process.on("uncaughtException", (error: Error) => {
  console.log("Uncaught Exception!");
  console.log(error.name, error.message);
  server.close(() => {
    console.error("Server is shutdown.");
    process.exit(1);
  });
});
