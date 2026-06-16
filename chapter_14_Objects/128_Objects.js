// **In Objects:**  Whenever you assign one object to another object, it will always **copy the reference.**

// Objects
// Key and value

let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Akash" };
let student3 = { name: "Yash", age: 27, phone: 987654320 };

// Key will not be in the double quotes

// below key in double quotes is actually JSON

let JSON_student4 = { "name": "Yash", "age": 27, "phone": 987654320 };


let a = { status: "Pass" };
// console.log(a.status);//Pass
// let a1 = { status: "Pass" };
// console.log(a1["status"]);//Pass

let b = a; //copy-by-refference
console.log(b.status);
b.status = "fail";
console.log(b.status);
console.log(a.status);//the value will change to fail as the both a and b contains refference to key-value pair

if (a === b) {
    console.log("true");
} else {
    console.log("false");
}//here ouput will be true

let c = { status: "pass" };
let d = { status: "pass" };
console.log(c);
console.log(d);

if (c === d) {
    console.log("true");
} else {
    console.log("false");
}//here output will be false as both c and d are different refference
