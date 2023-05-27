import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart, CartItem } from './interfaces/cart.interface';
import { CreateCartItemDto } from './dto/create-cart-item.dto';

@Injectable()
export class CartService {
  constructor(@InjectModel('Cart') private cartModel: Model<Cart>) {}

  async getCart(userId: string): Promise<Cart | null> {
    return this.cartModel.findOne({ user: userId }).exec();
  }

  async addToCart(userId: string, createCartItemDto: CreateCartItemDto): Promise<Cart> {
    const cart = await this.getCart(userId);
    if (!cart) {
      throw new NotFoundException(`Cart not found for user ID ${userId}`);
    }
    const cartItem: CartItem = {
      product: createCartItemDto.productId,
      quantity: createCartItemDto.quantity,
    };
    cart.items.push(cartItem);
    return cart.save();
  }

  async clearCart(userId: string): Promise<Cart> {
    const cart = await this.getCart(userId);
    if (!cart) {
      throw new NotFoundException(`Cart not found for user ID ${userId}`);
    }
    cart.items = [];
    return cart.save();
  }
}
