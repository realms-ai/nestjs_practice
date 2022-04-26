import { IsEmail, IsOptional, IsString } from "class-validator";
import { UserCreateDto } from "./create.dto";


export class UserUpdateDto extends UserCreateDto {
    @IsEmail()
    @IsOptional()
    email: string;

    @IsString()
    @IsOptional()
    password: string;
}