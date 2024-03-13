export class UserToken {
    username: string;
    jwtToken: string;

    constructor(username: string = '', jwtToken: string = '') {
        this.username = username;
        this.jwtToken = jwtToken;
    }
}