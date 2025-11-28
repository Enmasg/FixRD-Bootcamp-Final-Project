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

export interface ApiResponse<T> {
  success: boolean;
  data: T;
}

export interface SRequest extends Document {
  clientId: string;
  technicianId: string;
  description: string;
  date: Date;
  status: "pending" | "accepted" | "completed" | "cancelled";
}


export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: "client" | "technician";
}

export interface IReview extends Document {
  requestId: string;
  technicianId: string;
  clientId: string;
  rating: number;
  comment?: string;
  // mongoose timestamps
  createdAt?: Date;
  updatedAt?: Date;
}
