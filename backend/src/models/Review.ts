import mongoose, { Schema } from "mongoose";
import { IReview } from "@bootcamp/core";

const ReviewSchema = new Schema(
  {
    rating: { type: Number, required: true, min: 1, max: 5 },
    technicianId: { type: String, required: true },
    requestId: { type: String, required: true },
    clientId: { type: String, required: true },
    comment: { type: String },
  },
  { timestamps: true }
);

const Review = mongoose.model<IReview>("review", ReviewSchema);

export default Review;
