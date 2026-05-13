// The Temporal Dead Zone (TDZ) for `let` and `const`
// console.log(myVar); ReferenceError: Cannot access 'myVar' before initialization
// let myVar = "I am initialized now";
// `let` and `const` declarations are hoisted to the top of their block,
// but they are not initialized with a value like `var` is (with `undefined`).
// They remain in a "temporal dead zone" from the start of the block
// until the point of their declaration.

{
    // The TDZ for `myVar` starts here at the beginning of the block.

    // console.log(myVar); // This would throw a ReferenceError.
    // The error message is: Cannot access 'myVar' before initialization.
    // This is because `myVar` is in the TDZ.

    let myVar = "I am initialized now"; // The TDZ for `myVar` ends here.

    console.log(myVar); // "I am initialized now" - Safe to access.
}

// Trying to access `myVar` here would also result in a ReferenceError,
// but because it's out of scope, not because of the TDZ.
// console.log(myVar); // ReferenceError: myVar is not defined