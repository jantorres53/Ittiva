import { Optional } from "@angular/core";

export class CreateUserDto {
    username: string;
    email: string;
    passwd: string;
    roles: Optional;

    constructor(username:string,email:string,passwd:string,roles: Optional){
        this.username=username;
        this.email=email;
        this.passwd=passwd;
        this.roles=roles;
    }
}
