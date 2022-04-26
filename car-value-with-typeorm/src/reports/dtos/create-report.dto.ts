import { Type } from "class-transformer";
import { IsString, IsNumber, Min, Max, IsLatitude, IsLongitude } from "class-validator";

export class CreateReportDto {
  @IsString()
  make: string

  @IsString()
  model: string

  @Type(() => Number)
  @IsNumber()
  @Min(1930)
  @Max(2022)
  year: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(300000)
  mileage: number;

  @IsLongitude()
  longitude: number;

  @IsLatitude()
  latitude: number;

  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(1000000)
  price: number;
}