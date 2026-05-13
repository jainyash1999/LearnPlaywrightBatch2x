// The Temporal Dead Zone (TDZ) also applies to `const`
// Just like `let`, `const` is hoisted but not initialized.

{
    // TDZ for 'API_KEY' starts here

    // console.log(API_KEY); // ReferenceError: Cannot access 'API_KEY' before initialization

    const API_KEY = "SECRET_12345"; // TDZ ends here

    console.log(API_KEY); // "SECRET_12345"

    // API_KEY = "NEW_KEY"; // TypeError: Assignment to constant variable.
}

// console.log(API_KEY); // ReferenceError: API_KEY is not defined (Block Scoped)
