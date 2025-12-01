// ------------------------ricky---------------------------
import { Technician } from "../types"; 

const BASE_URL = "/api"; // CRA proxea a backend si configuran proxy 

export async function fetchTechniciansFromApi(): Promise<Technician[]> {
  const response = await fetch(`${BASE_URL}/technicians`); 
  if (!response.ok) {
    throw new Error("Error al cargar técnicos"); 
  }
  const data = await response.json(); 
  // Aquí backend devuelve el modelo Technician que definiste 
  return data as Technician[]; 
}