import mongoose from "mongoose";
import { thirtyDaysFromNow } from "../utils/date";

export interface SessionDocument extends mongoose.Document {
  userId: mongoose.Types.ObjectId;
  userAgent?: string;
  expiresAt: Date;
}

const schema = new mongoose.Schema<SessionDocument>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },
    userAgent: {
      type: String,
    },
    expiresAt: {
      type: Date,
      default: thirtyDaysFromNow,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<SessionDocument>("Session", schema);
