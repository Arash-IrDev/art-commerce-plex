import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { CartSchema } from './schemas/cart.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cart', schema: CartSchema }])],
  providers: [CartService],
  controllers: [CartController],
  exports: [CartService], // For use it in another modules
})
export class CartModule {}
