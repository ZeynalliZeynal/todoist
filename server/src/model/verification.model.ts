import mongoose from "mongoose";
import VerificationCodeType from "../constants/verificationCodeType";

export interface VerificationCodeDocument extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  type: VerificationCodeType;
  expiresAt: Date;
}

const schema = new mongoose.Schema<VerificationCodeDocument>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    type: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<VerificationCodeDocument>(
  "VerificationCode",
  schema,
);
