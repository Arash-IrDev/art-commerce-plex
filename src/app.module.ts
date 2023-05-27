import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot('mongodb+srv://bejamas:D4yQ9F0i4ZF3aLsR@mongodb-europe-cluster.exyjigi.mongodb.net'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
