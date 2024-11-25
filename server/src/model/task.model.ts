import mongoose, { Query } from "mongoose";
import slugify from "slugify";

const dueDateToday = new Date(
  new Date(new Date().setDate(new Date(new Date()).getDate() + 1)).setHours(
    0,
    0,
    0,
    0,
  ),
);

const schema = new mongoose.Schema<ITask>(
  {
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
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
      maxlength: [500, "Description must be at most 500 characters"],
      trim: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
    tags: {
      type: [String],
      default: undefined,
    },
    slug: String,
    priority: {
      type: String,
      default: "priority 4",
      enum: {
        values: ["priority 1", "priority 2", "priority 3", "priority 4"],
        message: "Priority must be between priority 1 and priority 4",
      },
    },
    dueDate: {
      type: Date,
      default: dueDateToday,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "A task must belong to a user."],
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  },
);

schema.index({ user: 1 });

schema.pre("save", function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});

schema.pre(/^find/, function (this: Query<any, any>, next) {
  this.populate({
    path: "user",
    select: "-__v -passwordChangedAt",
  });
  next();
});

const Task = mongoose.model<ITask>("Task", schema);

export default Task;
