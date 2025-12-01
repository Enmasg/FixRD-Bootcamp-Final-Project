import mongoose, { Schema } from "mongoose";
import { IReview } from "@bootcamp/core";

const ReviewSchema = new Schema(
  {
    requestId: { type: String, required: true },
    technicianId: { type: String, required: true },
    clientId: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, default: "" }
  },
  { timestamps: true }
);

const Review = mongoose.model<IReview>("review", ReviewSchema);

export default Review;
