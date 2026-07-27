// Private Fields (#) — Hidden Data
// PUBIC Fields 

class Credentials {
    #apiKey; // Private variables are not allowed to be used outside. 
    user;


    constructor(user, key) {
        this.user = user; // public
        this.#apiKey = key;
    }
    // Custom made fuction by us
    getAuthHeader() {
        return "Bearer " + this.#apiKey;
    }
}

let cred = new Credentials("admin", "secret_key_1234");
console.log(cred.user);
// console.log(cred.apiKey); undefined
// console.log(cred.#apiKey); //error

const token = cred.getAuthHeader();
console.log(token);