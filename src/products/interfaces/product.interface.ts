import { Document } from 'mongoose';

export interface Product {
  name: string;
  category: string;
  price: number;
  currency: string;
  image: {
    src: string;
    alt: string;
  };
  bestseller: boolean;
  featured: boolean;
  details?: {
    dimmentions?: {
      width: number;
      height: number;
    };
    size?: number;
    description?: string;
    recommendations?: Array<string>;
  };
}

export type ProductDocument = Product & Document;
