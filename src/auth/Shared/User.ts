export class User {
    userName: string;
    email: string;
    password: string;
    Repassword: string;

    constructor(userName: string, email: string, password: string, repassword:string) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.Repassword=repassword
      }
}

export class UserLogin {
    userName: string;
    password: string;

    constructor( _userName: string, password: string) {
 
        this.userName = _userName;
        this.password = password;

      }
}


