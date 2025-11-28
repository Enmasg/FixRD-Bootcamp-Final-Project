import { Router } from "express";
import { createReview, getReviewsByTechnician } from "./review.controller.js";

const router = Router();

// Crear reseña
router.post("/", createReview);

// Obtener reseñas de un técnico
router.get("/:technicianId", getReviewsByTechnician);

export default router;
