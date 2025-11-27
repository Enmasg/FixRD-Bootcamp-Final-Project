// ------------------------ricky---------------------------
import { Technician } from "../types"; 

export const techniciansMock: Technician[] = [
  {
    name: "Mike Johnson",
    categories: ["Plomería"],
    pricePerHour: 85,
    description:
      "Plomero maestro especializado en instalaciones residenciales y comerciales. Disponible para emergencias.",
    location: "Zona Metropolitana",
    photo: "https://i.pravatar.cc/150?img=11",
    rating: 4.9,
    reviewsCount: 127,
    tags: ["Licenciado", "15+ años", "Emergencias 24/7"],
  },
  {
    name: "Sarah Chen",
    categories: ["Electricidad"],
    pricePerHour: 95,
    description:
      "Ingeniera eléctrica experta en sistemas inteligentes, ahorro energético y seguridad eléctrica.",
    location: "Distrito Norte",
    photo: "https://i.pravatar.cc/150?img=32",
    rating: 5.0,
    reviewsCount: 89,
    tags: ["Certificada", "Smart Home", "Alta seguridad"],
  },
  {
    name: "David Rodríguez",
    categories: ["HVAC"],
    pricePerHour: 90,
    description:
      "Especialista HVAC en sistemas residenciales y comerciales. Enfoque en eficiencia energética.",
    location: "Zona Oeste",
    photo: "https://i.pravatar.cc/150?img=45",
    rating: 4.8,
    reviewsCount: 156,
    tags: ["EPA Certified", "12+ años", "Comercial"],
  },
];
