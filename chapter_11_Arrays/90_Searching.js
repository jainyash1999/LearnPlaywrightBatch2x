let results = ["pass", "fail", "pass", "error", "fail"];

//// indexOf — returns first index, or -1 if not found
let x1 = results.indexOf("fail"); //1
console.log(x1);
let x2 = results.indexOf("skip");// -1
console.log(x2);

// lastIndexOf — searches from the end
let x3 = results.lastIndexOf("fail");    // 4
console.log(x3);


// includes — returns boolean
let x4 = results.includes("error"); // true
console.log(x4);

let x5 = results.includes("skip");       // false
console.log(x5);



// find — returns first matching element
let nums = [10, 25, 30, 45];
let r = nums.find(x => x > 20);//25
console.log(r);

// findIndex
let r2 = nums.findIndex(n => n > 20); // 1
console.log(r2);


let r3 = nums.findLast(n => n > 20); // 45
console.log(r3);

let r4 = nums.findLastIndex(n => n > 20);// 3
console.log(r4);
