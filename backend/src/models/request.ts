import mongoose, { Document, Schema } from "mongoose";
import { IRequest } from "@bootcamp/core";

const RequestSchema: Schema = new Schema({
  clientId: { type: String, required: true },
  technicianId: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  status: {
    type: String,
    enum: ["pending", "accepted", "completed", "cancelled"],
    default: "pending",
  },
});

const RequestModel = mongoose.model<IRequest>("Request", RequestSchema);

export default RequestModel;
