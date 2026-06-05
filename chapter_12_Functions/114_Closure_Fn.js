// A closure is when a function **remembers** variables from its outer scope even after the outer function has finished executing.

// ### The Core Idea
// A closure is when an **inner function remembers variables from its outer function** even after the outer function has finished running.


function outer() {
    let message = "hello";
    console.log("Outer CALLED!");
    function inner() {
        console.log(message);
    }
    return inner;
}


let fn_inner = outer();
fn_inner();/*Outer CALLED!
           hello*/


// inner(); // ReferenceError: inner is not defined