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
    id: "appliance",
    name: "Reparación de electrodomésticos",
    description:
      "Técnicos especializados en diagnóstico, mantenimiento y reparación de electrodomésticos de todas las marcas.",
    features: [
      "Reparación de neveras",
      "Servicios de lavadoras y secadoras",
      "Reparación de hornos y estufas",
      "Diagnóstico y mantenimiento general",
    ],
    icon: "🛠️",
  },
  {
    id: "Refrigeracion",
    name: "Refrigeración y Climatización",
    description:
      "Especialistas en instalación, mantenimiento y reparación de sistemas de refrigeración y climatización residenciales y comerciales.",
    features: [
      "Instalación de aires acondicionados",
      "Refrigeración comercial",
      "Carga y recuperación de gas",
      "Mantenimiento preventivo",
    ],
    icon: "❄️",
  },
];
