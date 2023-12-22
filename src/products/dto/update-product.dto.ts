import { IsOptional } from 'class-validator';

export class UpdateProductDto {
  @IsOptional()
  name: string;

  @IsOptional()
  category: string;

  @IsOptional()
  price: number;

  @IsOptional()
  currency: string;

  @IsOptional()
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
