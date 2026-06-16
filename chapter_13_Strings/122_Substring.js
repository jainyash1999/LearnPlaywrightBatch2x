let str = "Login_Test_Pass_001";

// slice(start, end) — negative indexes supported
console.log(str.slice(0, 5)); // 0,4 ->Login
console.log(str.slice(11));//start from 11 till end ->Pass_001



let testNumber = str.slice(-3);
console.log(testNumber);

console.log(str.includes("Pass"));//true
// substring(start, end) — no negatives (treats as 0)

console.log(str.substring(6, 10));



