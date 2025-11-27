// ------------------------ricky---------------------------
import { Service } from "../types"; 

export const servicesMock: Service[] = [
  {
    id: "plumbing", 
    name: "Plomería", 
    description:
      "Expertos en fugas, instalaciones y reparaciones de emergencia para tu hogar o negocio.",
    features: [
      "Detección y reparación de fugas",
      "Instalación de tuberías",
      "Destape y limpieza de desagües",
      "Instalación de calentadores de agua",
    ], 
    icon: "🔧", 
  },
  {
    id: "electrical",
    name: "Electricidad",
    description:
      "Electricistas licenciados para instalaciones, mantenimiento y soluciones seguras.",
    features: [
      "Cableado y recableado",
      "Actualización de paneles",
      "Instalación de tomacorrientes",
      "Reparaciones de emergencia",
    ],
    icon: "⚡",
  },
  {
    id: "hvac",
    name: "Climatización (HVAC)",
    description:
      "Técnicos en aire acondicionado y calefacción para instalación, reparación y mantenimiento.",
    features: [
      "Instalación de A/C",
      "Mantenimiento preventivo",
      "Limpieza de ductos",
      "Instalación de termostatos",
    ],
    icon: "❄️",
  },
  {
    id: "painting",
    name: "Pintura y acabados",
    description:
      "Pintores profesionales para interiores, exteriores y proyectos de renovación.",
    features: [
      "Pintura interior",
      "Pintura exterior",
      "Corrección de superficies",
      "Asesoría de colores",
    ],
    icon: "🎨",
  },
];