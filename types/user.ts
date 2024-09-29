import { Model, Document } from "mongoose";

/**
 * Represents a user
 */
export interface User {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

export interface UserDocument extends User, Document {
  _id: string;  // Asegúrate de que _id es un string
  matchPassword: (password: string) => Promise<Boolean>;
}

export interface UserModel extends Model<UserDocument> {}