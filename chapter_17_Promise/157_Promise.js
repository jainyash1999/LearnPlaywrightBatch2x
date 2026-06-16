let order = new Promise(function (resolve, reject) {
    let foodReady = true;
    if (foodReady) {
        resolve("Burger is delivered, Food is ready.");
    }
    else {
        reject("Order Cancelled due to rain");
    }
});

console.log(order);
