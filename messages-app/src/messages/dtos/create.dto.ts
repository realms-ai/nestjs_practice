import { IsString } from "class-validator";

export class CreateDto {
    @IsString()
    content: string
}