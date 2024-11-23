import mongoose from "mongoose";

const schema = new mongoose.Schema<ITemplate>({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
  category: {
    type: String,
    required: [true, "Category is required"],
    trim: true,
  },
  name: {
    type: String,
    unique: true,
    required: [true, "Name cannot be empty."],
    minlength: [5, "Name must be at least 5 characters"],
    maxlength: [50, "Name must be at most 50 characters"],
    trim: true,
  },
  description: {
    type: String,
    trim: true,
    required: [true, "Description cannot be empty."],
  },
  content: {
    type: String,
    trim: true,
    required: [true, "Content cannot be empty."],
    minLength: [50, "Description must be at least 50 characters"],
  },
  exampleUrl: {
    type: String,
    required: [true, "Example URL must be a valid URL"],
    trim: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
});

export default mongoose.model<ITemplate>("Template", schema);
