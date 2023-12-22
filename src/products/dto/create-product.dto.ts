import { IsOptional, IsNotEmpty } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  currency: string;

  @IsNotEmpty()
  image: {
    src: string;
    alt: string;
  };

  @IsOptional()
  bestseller: boolean;

  @IsOptional()
  featured: boolean;

  @IsOptional()
  details: {
    dimmentions: {
      width: number;
      height: number;
    };
    size: number;
    description: string;
    recommendations: Array<string>;
  };
}