// =========================================================
// Detailed: Single vs Double Quotes vs Backticks in JS
// =========================================================

// 1. Single Quotes (' ')
// Used for normal strings. Preferred by many JS style guides (like Airbnb) for simplicity.
let singleQuoteStr = 'This is a single quote string.';
let singleInsideDouble = 'She said, "Hello there!"'; // Easy to put double quotes inside

// 2. Double Quotes (" ")
// Exactly the same behavior as single quotes.
let doubleQuoteStr = "This is a double quote string.";
let doubleInsideSingle = "It's a beautiful day outside!"; // Easy to put single quotes inside

// Escaping: What if we need the same quote inside itself? We use the escape character (\)
let escapedSingle = 'It\'s raining!';
let escapedDouble = "He said, \"JavaScript is fun!\"";

// 3. Backticks (` `) - Template Literals (Introduced in ES6)
// Backticks are much more powerful than single or double quotes.

// A. String Interpolation (Variables & Expressions)
let username = "Yash";
let age = 25;

// Old way (Concatenation with +)
let oldWay = "My name is " + username + " and I am " + age + " years old.";

// New way (Backticks - clean and readable)
let newWay = `My name is ${username} and I am ${age} years old.`;

// You can even do math inside ${}
let calculation = `2 + 2 equals ${2 + 2}`;

// B. Multi-line Strings
// With single/double quotes, you have to use \n for a new line.
// With backticks, you just press Enter!
let newMultiLine = `This is line 1.
This is line 2.
This is line 3.`;

console.log(newWay);
/*
  Feature              |  '' or ""  |  ``
  ---------------------|------------|------------
  Simple text          |     ✓      |   ✓
  Variable injection   |     ✗      |   ✓  -> ${var}
  Multi-line           |     ✗      |   ✓
  Expression inside    |     ✗      |   ✓  -> ${a + b}
*/