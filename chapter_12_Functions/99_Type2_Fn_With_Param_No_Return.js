function greetByName(name) {
    console.log("Hi ", name);
}

greetByName("Pramod");
let result = greetByName("Amit");
console.log(result);//Hi Amit
//undefined(as no return)


function begger(money) {
    console.log("Thanks", money);
}

let returnMesomething = begger(100);
console.log(returnMesomething);//Thanks100
//undefined(as no return)