
class User {

    name: String;
    email: String;
    password: String;

    constructor(user: User) {
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
    }
}

export = User;