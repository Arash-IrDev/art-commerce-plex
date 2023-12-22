import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';
import { CartService } from 'src/cart/cart.service';
import { CreateCartItemDto } from 'src/cart/dto/create-cart-item.dto'
import { Cart } from 'src/cart/interfaces/cart.interface'

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getCart(@Param('userId') userId: string): Promise<Cart | null> {
    return this.cartService.getCart(userId);
  }

  @Post()
  addToCart(@Param('userId') userId: string, @Body() createCartItemDto: CreateCartItemDto): Promise<Cart> {
    return this.cartService.addToCart(userId, createCartItemDto);
  }

  @Delete()
  clearCart(@Param('userId') userId: string): Promise<Cart> {
    return this.cartService.clearCart(userId);
  }
}
