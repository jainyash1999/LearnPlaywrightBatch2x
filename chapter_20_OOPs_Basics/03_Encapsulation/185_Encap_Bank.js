class Boi {
    #balance;
    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;
    }
    getBalance() {
        return this.#balance;

    }
    setBalance(balance, isCashier) {
        if (isCashier) {
            this.#balance = balance;
        }
        else {
            console.log("Not allowed");

        }

    }
}
let user = new Boi("Yash", 1000);
console.log(user.getBalance());
user.setBalance(2000, false);
console.log(user.getBalance());
let user2 = new Boi("Khushi", 5000);
console.log(user2.getBalance());
user2.setBalance(10000, true);
console.log(user2.getBalance());