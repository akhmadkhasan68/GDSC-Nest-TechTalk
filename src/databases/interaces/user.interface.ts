import { IBaseEntity } from "./base.interface";

export interface IUser extends IBaseEntity {
    name: string;
    email: string;
    password: string;
}
