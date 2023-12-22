import { Document } from 'mongoose';

export interface Cart extends Document {
  user: string; // Assuming we store the user ID as a string
  items: CartItem[];
}

export interface CartItem {
  product: string;
  quantity: number;
}
