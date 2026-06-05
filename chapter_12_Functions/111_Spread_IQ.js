function add(a, b, c) {

    return a + b + c;

}
let num = [1, 2, 3];
let result = add(...num);
console.log(result);


let responseCodes = [200, 201, 404];

function hasError(...codes) {
    return codes.some(c => c >= 400);
}
let errorPresent = hasError(...responseCodes); // true
console.log(errorPresent);
