import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/databases/entities/user.entity";
import { IUser } from "src/databases/interaces/user.interface";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<IUser>
    ) {}

    async findUserById(id: number): Promise<IUser> {
        return await this.userRepository.findOneBy({
            id
        })
    }

    async findOneByEmail(email: string): Promise<IUser> {
        return await this.userRepository.findOneBy({
            email
        });
    }

    async create(data: IUser): Promise<IUser> {
        return await this.userRepository.save(data)
    }
}
