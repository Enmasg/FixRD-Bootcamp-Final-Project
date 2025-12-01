import mongoose, { Document, Schema } from "mongoose";
import { IUser } from "@bootcamp/core";

const UserSchema: Schema = new Schema({
  _Id: { type: String, require: true },
  name: { type: String, require: true  },
  email: { type: String, require: true  },
  password: { type: String, require: true  },
  role: { 
    type: String, 
    enum: ["client", "technician"],
    default: "client" 
  },
  createDate: { 
    type: Date, 
    default: Date.now
  },
  
});

const User = mongoose.model<IUser>("user", UserSchema);

export default User;
