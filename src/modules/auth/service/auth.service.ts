import { Injectable, UnauthorizedException } from "@nestjs/common";
import { LoginRequest } from "../requests/login.request";
import { UserRepository } from "src/modules/user/repositories/user.repository";
import { IUser } from "src/databases/interaces/user.interface";
import { RegisterRequest } from "../requests/register.request";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";
import { IJwtPayload } from "../strategies/jwt-payload.interface";

@Injectable()
export class AuthService {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly jwtService: JwtService,
    ) {}

    async login(request: LoginRequest): Promise<string> {
        const data = await this.userRepository.findOneByEmail(request.email);
        if(!data) {
            throw new UnauthorizedException('User tidak ditemukan');
        }

        const isValidPassword = await bcrypt.compare(request.password, data.password);
        if(!isValidPassword) {
            throw new UnauthorizedException('Password salah');
        }

        const payload: IJwtPayload = {
            id: data.id
        }

        return this.jwtService.sign(payload);
    }

    async register(request: RegisterRequest): Promise<IUser> {
        const { email, name, password } = request;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        return await this.userRepository.create({
            name: name,
            email: email,
            password: passwordHash
        });
    }
}
