import { Type } from "class-transformer";
import { IsBoolean } from "class-validator";


export class ApprovedReportDto {
  @Type(() => Boolean)
  @IsBoolean()
  approved: boolean
}