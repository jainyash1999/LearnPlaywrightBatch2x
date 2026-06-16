const user = {
    name: "Pramod",
    age: 43
}

const calculator = {
    value: 0,
    add(n) {
        let result = 0;
        for (let i = 0; i <= n; i++) {
            result += i;
        }
        console.log(result);

    },
    subtract(n) {

    }
}


calculator.add(10);