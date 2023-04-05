export class LoginUserDto {
    username: string;
    passwd: string;

    constructor(username:string,passwd:string){
        this.username=username;
        this.passwd=passwd;
    }
}
