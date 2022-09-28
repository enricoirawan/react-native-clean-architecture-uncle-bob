export interface IUserPayload {
    token: string;
    username: string;
}

export class UserPayload implements IUserPayload {
    public token: string;
    public username: string;

    constructor(token: string, username: string) {
        this.token = token;
        this.username = username;
    }
}
