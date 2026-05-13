// undefined vs null in JavaScript

// 1. undefined
// A variable that has been declared but NOT assigned a value is automatically `undefined`.
// It means the value is currently absent by default.
let myVariable;
console.log("Value of myVariable:", myVariable); // Output: undefined
console.log("Type of myVariable:", typeof myVariable); // Output: "undefined"


// 2. null
// `null` is an assignment value. You explicitly assign `null` to a variable
// to indicate that it intentionally holds no value or points to nothing.
let emptyVariable = null;
console.log("Value of emptyVariable:", emptyVariable); // Output: null
console.log("Type of emptyVariable:", typeof emptyVariable); // Output: "object" (this is a known, historical JavaScript bug!)


// 3. Comparison
// Loose equality (==) checks if they both represent "no value"
console.log("null == undefined:", null == undefined); // Output: true

// Strict equality (===) checks if they are the exact same type and value
console.log("null === undefined:", null === undefined); // Output: false


// 4. More examples of undefined automatically occurring
// - Accessing a non-existent property in an object
let person = { name: "Yash" };
console.log("Missing property:", person.age); // Output: undefined

// - Function that doesn't return anything explicitly
function doNothing() { }
console.log("Function return value:", doNothing()); // Output: undefined

// - Function parameters that are not provided
function greet(firstName) {
    console.log("Greeting:", firstName); // Output: undefined (if called without arguments)
}
greet();


// 5. More examples of null being explicitly used
// - Placeholder for an object that is expected but not yet available
let currentUser = null; // E.g., before the user logs in
currentUser = { name: "Yash", loggedIn: true }; // Assigned later

// --------------------------------------------------------
// 3. Key Differences (Summary Table)
// --------------------------------------------------------

/*
  | Feature              | undefined                     | null                           |
  |----------------------|-------------------------------|--------------------------------|
  | Meaning              | Not assigned yet              | Intentionally empty            |
  | Who sets it?         | JavaScript automatically      | Developer manually             |
  | Type                 | undefined                     | object (historical bug in JS)  |
  | == comparison        | null == undefined  -> true    |                                |
  | === comparison       | null === undefined -> false   |                                |
*/