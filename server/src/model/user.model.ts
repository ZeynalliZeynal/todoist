import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import crypto from "crypto";

const schema = new mongoose.Schema<IUser, {}, IUserMethods>({
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
schema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined;

  next();
});

schema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;
  next();
});

schema.method(
  "isPasswordCorrect",
  async function (candidatePassword: string, userPassword: string) {
    return await bcrypt.compare(candidatePassword, userPassword);
  },
);

schema.method("isPasswordChangedAfter", function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      String(new Date(this.passwordChangedAt).getTime() / 1000),
      10,
    );

    return JWTTimestamp < changedTimestamp;
  }
  return false;
});

schema.method("createResetPasswordToken", function () {
  const resetToken = crypto.randomBytes(32).toString("hex");
  this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.resetPasswordExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
});

export default mongoose.model("User", schema);
