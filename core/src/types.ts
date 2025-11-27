import { Document } from "mongoose";

export interface ITechnician extends Document {
  userId: string;
  categories: string[];
  pricePerHour: number;
  description: string;
  location: string;
  photo: string;
  rating: number;
}

export type status = "pending" | "accepted" | "completed" | "cancelled";
export interface IRequest extends Document {
  clientId: string;
  technicianId: string;
  description: string;
  date: Date;
  status: status;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}
