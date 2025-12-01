// ------------------------ricky---------------------------
export interface Service {
  id: string; 
  name: string;
  description: string; 
  features: string[]; 
  icon: string;
}

export interface Technician {
  _id?: string; 
  name: string;
  categories: string[]; 
  pricePerHour: number; 
  description: string; 
  location: string;
  photo?: string; 
  rating?: number;
  reviewsCount?: number; 
  tags?: string[];
}
