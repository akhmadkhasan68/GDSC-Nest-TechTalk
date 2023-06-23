import { Body, Controller, Post } from "@nestjs/common";
import { LoginRequest } from "../requests/login.request";
import { AuthService } from "../service/auth.service";
import { request } from "http";
import { RegisterRequest } from "../requests/register.request";
import { IApiResponse } from "src/common/interfaces/response.interface";
import { IUser } from "src/databases/interaces/user.interface";
import { LoginResponse } from "../responses/login.response";
import { RegisterResponse } from "../responses/register.response";

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) {}

    @Post('login')
    async login(
        @Body() request: LoginRequest
    ): Promise<IApiResponse<LoginResponse>> {
        const data = await this.authService.login(request);

        return {
            message: 'OK',
            data: LoginResponse.toResponse(data)
        };
    }

    @Post('register')
    async register(
        @Body() request: RegisterRequest
    ): Promise<IApiResponse<RegisterResponse>> {
        const data = await this.authService.register(request);

        return {
            message: 'OK',
            data: RegisterResponse.toResponse(data)
        };
    }
}
