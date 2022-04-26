import { IsEmail, IsString } from "class-validator";


export class UserCreateDto {
    @IsEmail({}, { message: 'Invalid email format' })
    email: string;

    @IsString()
    password: string;
}