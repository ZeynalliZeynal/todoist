import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";

dotenv.config({ path: "./config.env" });

const PORT = process.env.PORT || 8000;

const DB = process.env.DATABASE!.replace(
  "<db_password>",
  process.env.DATABASE_PASSWORD!,
);

mongoose
  .connect(DB)
  .then((con) => console.log("Connection to database successful"));

app.listen(PORT, () => {
  console.log(`[${process.env.NODE_ENV}] Server is running on port ${PORT}`);
});
