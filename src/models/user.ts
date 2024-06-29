// Mongoose user model (user.model.ts)

import mongoose, { Schema, Document, Model } from 'mongoose';

// Define interface for User document
interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

// Create User schema
const userSchema: Schema<IUser> = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: 'user'
  }
);

// Create User model
const User: Model<IUser> = mongoose.models.User || mongoose.model<IUser>('User', userSchema);

export default User;
