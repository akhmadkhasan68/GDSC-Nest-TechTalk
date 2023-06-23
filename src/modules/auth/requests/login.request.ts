import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class LoginRequest {
    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string;
}
