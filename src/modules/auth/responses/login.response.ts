export class LoginResponse {
    accessToken: string;

    static toResponse(accessToken: string): LoginResponse {
        return {
            accessToken: accessToken
        }
    }
}
