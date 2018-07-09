class CheckingAccount {
    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.products = [];
    }

    set clientId(clientId) {
        let length = clientId.length === 6;
        let type = function () {
            for (let i = 0; i < clientId.length; i++) {
                if (!Number(clientId[i])) {
                    return false;
                }
            }

            return true;
        };

        if (!length || !type()) {
            throw new TypeError("Client ID must be a 6-digit number");
        }

        this._clientId = clientId;
    }

    set email(email) {
        let regex = /[a-z]+@[a-z]+\.[a-z]+[\.a-z]*/g;

        if (!regex.test(email)) {
            throw new TypeError("Invalid e-mail");
        }

        this._email = email;
    }

    set firstName(firstName) {
        if (firstName.length < 3 || firstName.length > 20) {
            throw new TypeError("First name must be between 3 and 20 characters long");
        }
        else if (!this.checkName(firstName)) {
            throw new TypeError("First name must contain only Latin characters");
        }

        this._firstName = firstName;
    }

    set lastName(lastName) {
        if (lastName.length < 3 || lastName.length > 20) {
            throw new TypeError("Last name must be between 3 and 20 characters long");
        }
        else if (!this.checkName(lastName)) {
            throw new TypeError("Last name must contain only Latin characters");
        }
        this._lastName = lastName;
    }

    checkName(name) {
        let regex = /\b[a-zA-Z]{3,20}\b/g;

        return regex.test(name);
    }

}

// let acc = new CheckingAccount('1314as', 'ivan@some.com', 'Ivan', 'Petrov');
// let acc1 = new CheckingAccount('131455', 'ivan@', 'Ivan', 'Petrov');
// let acc2 = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov');
let acc3 = new CheckingAccount('131455', 'ivan@some.com', 'Ivan', 'P3trov');
