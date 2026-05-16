// ==========================================
// String Concatenation Examples
// ==========================================

// 1. Using the `+` Operator (Most Common)
let firstName = "John";
let lastName = "Doe";

// Concatenating with a space in the middle
let fullName = firstName + " " + lastName;
console.log("Using + operator:", fullName); // Output: John Doe

// 2. Using Template Literals (Modern & Preferred)
let age = 30;

// Injecting variables directly into the string using backticks
let greeting = `Hello, my name is ${firstName} ${lastName} and I am ${age} years old.`;
console.log("Using Template Literals:", greeting);

// 3. Using the `+=` Assignment Operator
let message = "Hello";
message += ", ";
message += "World!";
console.log("Using += operator:", message); // Output: Hello, World!

// 4. Using the concat() Method
let string1 = "Hello";
let string2 = "World";
let combined = string1.concat(" ", string2);
console.log("Using concat():", combined); // Output: Hello World