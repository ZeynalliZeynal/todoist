import mongoose from "mongoose";
import validator from "validator";

const schema = new mongoose.Schema<IUser>({
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
    validate: [validator.isEmail, "Your email is not a valid."],
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

export default mongoose.model("User", schema);
