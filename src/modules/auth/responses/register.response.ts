import { IUser } from "src/databases/interaces/user.interface";

export class RegisterResponse {
    name: string;
    email: string;

    static toResponse(data: IUser): RegisterResponse {
        const { name, email } = data;
        return {
            name,
            email
        }
    }
}
