export class User {
    user_id : number;
    username: string;
    manager: boolean;
    token: string;
    
    constructor(user_id: number, username: string, manager: boolean, token: string){
        this.user_id = user_id
        this.username = username;
        this.manager = manager;
        this.token = token;
    }
}

export interface User {
    user_id: number;
    username: string;
    manager: boolean;
    token: string;
}