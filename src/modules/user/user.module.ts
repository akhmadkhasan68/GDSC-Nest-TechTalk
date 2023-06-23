import { Module } from '@nestjs/common';
import { UserRepository } from './repositories/user.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/databases/entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forFeature([
            User
        ])
    ],
    providers: [UserRepository],
    exports: [UserRepository]
})
export class UserModule {}
