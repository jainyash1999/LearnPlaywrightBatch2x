/**
 * JavaScript Identifier Rules
 * 
 * An identifier is a name used to identify a variable, function, class, etc.
 * 
 * Rules:
 * 1. Must start with a letter (a-z, A-Z), an underscore (_), or a dollar sign ($).
 * 2. Subsequent characters can be letters, digits (0-9), underscores, or dollar signs.
 * 3. Identifiers are case-sensitive.
 * 4. Cannot be JavaScript reserved words or keywords (like var, let, if, for, etc.).
 * 5. Cannot contain spaces or hyphens (-).
 */

// ==========================================
// 1. Valid Identifiers
// ==========================================

// Starting with letters
let myVariable = 10;
let Name = "John";
let camelCaseIsStandard = true;

// Starting with an underscore
let _privateVar = "hidden";
//let _ = "underscore";

// Starting with a dollar sign (often used in libraries like jQuery or for observables)
let $element = "div";
let $ = "dollar";

// Using numbers (but not at the beginning)
let user1 = "Alice";
let user_2_name = "Bob";


// ==========================================
// 2. Case Sensitivity
// ==========================================

// The following are all different identifiers
let score = 50;
let Score = 100;
let SCORE = 200;

console.log(score); // 50
console.log(Score); // 100
console.log(SCORE); // 200


// ==========================================
// 3. Invalid Identifiers (These will cause SyntaxErrors if uncommented)
// ==========================================

// let 1stUser = "Invalid";      // Error: Cannot start with a number
// let my-variable = "Invalid";  // Error: Hyphens are not allowed (interpreted as subtraction)
// let my variable = "Invalid";  // Error: Spaces are not allowed
// let let = 5;                  // Error: Cannot use reserved keywords


// ==========================================
// 4. Best Practices (Conventions)
// ==========================================

// Use camelCase for variables and functions
let firstName = "Jane";
function calculateTotal() {}

// Use PascalCase for classes and constructor functions
class UserProfile {}
function Car() {}

// Use UPPER_SNAKE_CASE for constants
const MAX_USERS = 100;
const API_URL = "https://api.example.com";


// ============================================
// JavaScript Identifier Rules - Single Example
// ============================================

// 1. Must begin with a letter, underscore, or dollar sign
let validName = "starts with letter";
let _private = "starts with underscore";
let $jquery = "starts with dollar sign";

// 2. Subsequent characters may include digits
let item1 = "letter then digit";
let _temp2 = "underscore then digit";
let $var123 = "dollar then digits";
let a1_b2 = "mixed letters digits underscore";

// 3. CANNOT start with a digit (these would throw SyntaxError if uncommented)
// let 1stPlace = "invalid";     // SyntaxError: Invalid or unexpected token
// let 2ndItem = "invalid";      // SyntaxError

// 4. CANNOT be a reserved keyword (these would throw SyntaxError if uncommented)
// let class = "invalid";        // SyntaxError: Unexpected token 'class'
// let const = "invalid";        // SyntaxError
// let function = "invalid";     // SyntaxError

// 5. Identifiers are CASE-SENSITIVE
let myVar = "lowercase v";
let myvar = "lowercase v"; // Different identifier!
let MyVar = "uppercase M"; // Another different identifier!
console.log(myVar !== myvar); // true
console.log(myVar !== MyVar); // true

// 6. Unicode letters and Unicode escape sequences are allowed
let café = "Unicode letter é";
let 变量 = "Chinese characters";
let \u0041 = "Unicode escape for A"; // Equivalent to: let A = ...
var \u005f = "Unicode escape for _"; // Equivalent to: let _ = ...

// 7. CANNOT contain spaces, hyphens, or special characters (except _ and $)
// let my-name = "invalid";      // SyntaxError: Unexpected token '-'
// let my name = "invalid";      // SyntaxError: Unexpected identifier
// let my@name = "invalid";      // SyntaxError: Unexpected token '@'
// let my#name = "invalid";      // SyntaxError: Unexpected token '#'
// let my!name = "invalid";      // SyntaxError: Unexpected token '!'

// ============================================
// Naming Conventions (Cases)
// ============================================

// 1. camelCase (standard for JS variables and functions)
let userName = "camelCase";
let totalPrice = 99.99;
let isLoggedIn = true;
function getUserInfo() { return "function camelCase"; }

// 2. PascalCase (standard for JS classes and constructors)
let UserProfile = "PascalCase";
let ShoppingCart = "class name style";
function Person() { return "constructor"; }

// 3. snake_case (underscore separated)
let user_name = "snake_case";
let total_price = 49.99;
let is_logged_in = false;

// 4. SCREAMING_SNAKE_CASE (constants)
const MAX_SIZE = 100;
const API_KEY = "abc123";
const DATABASE_URL = "localhost";

// 5. Hungarian Notation (prefix with type - older style)
let strName = "string prefix";
let bActive = true;       // boolean
let nCount = 5;           // number
let arrItems = [];        // array

// ============================================
// Console Output Summary
// ============================================
console.log("=== Valid Identifiers ===");
console.log(validName);
console.log(_private);
console.log($jquery);
console.log(item1);
console.log($var123);
console.log(a1_b2);

console.log("\n=== Case Sensitivity Demo ===");
console.log("myVar:", myVar);
console.log("myvar:", myvar);
console.log("MyVar:", MyVar);

console.log("\n=== Unicode Identifiers ===");
console.log("café:", café);
console.log("变量:", 变量);
console.log("\\u0041:", \u0041);

console.log("\n=== Naming Conventions ===");
console.log("camelCase:", userName, totalPrice, isLoggedIn, getUserInfo());
console.log("PascalCase:", UserProfile, ShoppingCart, Person());
console.log("snake_case:", user_name, total_price, is_logged_in);
console.log("SCREAMING_SNAKE_CASE:", MAX_SIZE, API_KEY, DATABASE_URL);
console.log("Hungarian Notation:", strName, bActive, nCount, arrItems);

