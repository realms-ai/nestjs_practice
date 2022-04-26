import { Type } from "class-transformer";
import { IsString, IsNumber, Min, Max, IsLatitude, IsLongitude, IsOptional } from "class-validator";

export class GetEstimateDto {
  @IsOptional()
  @IsString()
  make: string

  @IsOptional()
  @IsString()
  model: string

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(1930)
  @Max(2022)
  year: number;

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  @Min(0)
  @Max(300000)
  mileage: number;

  @IsOptional()
  @Type(() => Number)
  @IsLongitude()
  longitude: number;

  @IsOptional()
  @Type(() => Number)
  @IsLatitude()
  latitude: number;
}