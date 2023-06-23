import { Column, Entity } from "typeorm";
import { IUser } from "../interaces/user.interface";
import { BaseEntity } from "./base.entity";

@Entity('users')
export class User extends BaseEntity implements IUser {
    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
}
