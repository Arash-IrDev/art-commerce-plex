import { Document } from 'mongoose';
// import { User } from '../user/schemas/user.interface';
// import { Product } from 'src/products/interfaces/product.interface';

export interface Cart extends Document {
//   user: User;
  items: CartItem[];
}

export interface CartItem {
  product: string;
  quantity: number;
}
