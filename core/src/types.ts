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

export type status = "pending" | "accepted" | "completed" | "cancelled";
export interface IRequest extends Document {
  clientId: string;
  technicianId: string;
  description: string;
  date: Date;
  status: status;
}

export interface IUser extends Document{
  _Id: string;
  name: string;
  email: string;
  password: string;
  role: "client" | "technician";
  createDate: Date;
}
