import { Schema } from 'mongoose';

export const CartSchema = new Schema({
  user: {
  type: Schema.Types.ObjectId,
  ref: 'User',
  required: true,
  },
  items: [
    {
      product: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
});