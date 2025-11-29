// ------------------------ricky---------------------------
import { Technician } from "../types"; 

export const techniciansMock: Technician[] = [
  {
    name: "Miguelito Pérez",
    categories: ["Plomería"],
    pricePerHour: 5000,
    description:
      "Plomero maestro especializado en instalaciones residenciales y comerciales. Disponible para emergencias.",
    location: "Zona Metropolitana",
    photo: "https://i.pravatar.cc/150?img=11",
    rating: 4.9,
    reviewsCount: 127,
    tags: ["Licenciado", "15+ años", "Emergencias 24/7"],
  },
  {
    name: "Ana Gómez",
    categories: ["Electricidad"],
    pricePerHour: 4200,
    description:
      "Ingeniera eléctrica experta en sistemas inteligentes, ahorro energético y seguridad eléctrica.",
    location: "Distrito Norte",
    photo: "https://i.pravatar.cc/150?img=32",
    rating: 5.0,
    reviewsCount: 89,
    tags: ["Certificada", "5+ años", "Alta seguridad"],
  },
  {
    name: "Carlos Ramírez",
    categories: ["Refrigeracion y Climatización"],
    pricePerHour: 3000,
    description:
      "Especialista HVAC en sistemas residenciales y comerciales. Enfoque en eficiencia energética.",
    location: "Zona Oeste",
    photo: "https://i.pravatar.cc/150?img=18",
    rating: 4.8,
    reviewsCount: 156,
    tags: ["Certificado EPA", "12+ años", "Comercial"],
  },
];
