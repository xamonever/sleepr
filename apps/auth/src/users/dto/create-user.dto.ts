import {IsEmail, IsNotEmpty, IsString, IsStrongPassword} from "class-validator";

export class CreateUserDto {
    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string;

    @IsStrongPassword()
    @IsString()
    password: string;
}