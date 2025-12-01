import mongoose, { Schema } from "mongoose";
import { IUser } from "@bootcamp/core";

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },

  email: { type: String, required: true, unique: true },

  password: { type: String, required: true },

  role: {
    type: String,
    enum: ["client", "technician"],
    default: "client",
  },
});

const User = mongoose.model<IUser>("user", UserSchema);

export default User;
