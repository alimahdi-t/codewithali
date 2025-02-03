import { Schema, models, model, Document } from "mongoose";

export interface IUser extends Document {
  user_id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  imageUrl: string;
  bio?: string;
  createdAt: Date;
  updatedAt: Date;
  role: "ADMIN" | "USER" | "AUTHOR" | "INSTRUCTOR";
}

const UserSchema = new Schema<IUser>({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
    unique: true,
  },
  imageUrl: { type: String },
  bio: {
    type: String,
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    required: true,
  },
  role: {
    type: String,
    enum: ["ADMIN", "USER", "AUTHOR", "INSTRUCTOR"],
    required: true,
  },
});

const User = models.User || model<IUser>("User", UserSchema);
export default User;
