
export enum PropertyStatus {
  ForSale = 'For Sale',
  ToLet = 'To Let',
  Auction = 'Auction',
}

export interface Agent {
  name: string;
  email: string;
  phone: string;
  imageUrl: string;
}

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  status: PropertyStatus;
  auctionDetails?: string;
  bedrooms: number;
  bathrooms: number;
  parking: number;
  size: number;
  description: string;
  features: string[];
  images: string[];
  agent: Agent;
}

export interface Testimonial {
  quote: string;
  author: string;
}

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}
