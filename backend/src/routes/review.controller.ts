import { Request, Response } from "express";
import Review from "../models/review.js";

// Crear una reseña
export const createReview = async (req: Request, res: Response) => {
  try {
    const { requestId, technicianId, clientId, rating, comment } = req.body;

    if (!requestId || !technicianId || !clientId || !rating) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const review = await Review.create({
      requestId,
      technicianId,
      clientId,
      rating,
      comment,
    });

    return res.status(201).json(review);
  } catch (error) {
    console.error("Error creating review:", error);
    return res.status(500).json({
      message: "Error creating review",
      error,
    });
  }
};

// Obtener todas las reseñas de un técnico
export const getReviewsByTechnician = async (req: Request, res: Response) => {
  try {
    const { technicianId } = req.params;

    if (!technicianId) {
      return res.status(400).json({ message: "Technician ID required" });
    }

    const reviews = await Review.find({ technicianId }).sort({
      createdAt: -1,
    });

    return res.status(200).json(reviews);
  } catch (error) {
    console.error("Error retrieving reviews:", error);
    return res.status(500).json({
      message: "Error retrieving reviews",
      error,
    });
  }
};
