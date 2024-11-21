import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const schema = new mongoose.Schema<IUser, {}, IUserMethods>({
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
    validate: [validator.isEmail, "Your email is not a valid"],
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
  photo: String,
});
schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

schema.method(
  "isPasswordCorrect",
  async function (candidatePassword: string, userPassword: string) {
    return await bcrypt.compare(candidatePassword, userPassword);
  },
);

export default mongoose.model("User", schema);
