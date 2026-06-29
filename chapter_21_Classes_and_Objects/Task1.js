class Calculator {
    constructor(num1, num2) {
        this.num1 = num1;
        this.num2 = num2;
    }
    add() {
        return this.num1 + this.num2;
    }
    sub() {
        return this.num1 - this.num2;
    }
    mult() {
        return this.num1 * this.num2;
    }
    div() {
        return this.num1 / this.num2;
    }
    mod() {
        return this.num1 % this.num2;
    }
}
const calc = new Calculator(20, 5);
console.log("Addition", calc.add());
console.log("Subtraction", calc.sub());
console.log("Multiplication", calc.mult());
console.log("Division", calc.div());
console.log("Modulus", calc.mod());

// Addition 25
// Subtraction 15
// Multiplication 100
// Division 4
// Modulus 0
