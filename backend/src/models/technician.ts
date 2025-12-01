import mongoose, { Document, Schema } from "mongoose";
import { ITechnician } from "@bootcamp/core";

const TechnicianSchema: Schema = new Schema({
  categories: { type: [String], default: [] },
  pricePerHour: { type: Number, default: 0 },
  userId: { type: String, require: true },
  description: { type: String },
  location: { type: String },
  rating: { type: Number },
  photo: { type: String },
});

const Technician = mongoose.model<ITechnician>("technician", TechnicianSchema);

export default Technician;
