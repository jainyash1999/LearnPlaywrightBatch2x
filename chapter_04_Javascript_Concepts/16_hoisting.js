// JS Engine
// LINE BY LINE, , JIT Compilation

console.log(greeting);//undefined
var greeting = "Hello";
console.log(greeting);

// Behind the scenes:

// var greeting;              <-- hoisted with undefined
// console.log(greeting);    <-- undefined
// greeting = "Hello!";      <-- assignment stays in place
// console.log(greeting);    <-- "Hello!"


// var a;//behind the scene
console.log(a);//undefined
var a = "Yash";
console.log(a);