// ==========================================
// All Number Literals Supported in JavaScript
// ==========================================

// 1. Decimal (Base 10)
// The most common way to write numbers.
let decimalInt = 42;          // Integer
let decimalFloat = 3.14159;   // Floating-point number
let negativeNum = -100;       // Negative number
let zeroValue = 0;            // Zero

// 2. Hexadecimal (Base 16)
// Starts with '0x' or '0X'. Uses digits 0-9 and letters A-F.
// Often used in color codes or memory addresses.
let hexNum = 0xFF;            // 255 in decimal
let colorCode = 0xFF0000;     // 16711680 in decimal (Red color)

// 3. Octal (Base 8)
// Starts with '0o' or '0O'. Uses digits 0-7.
// Often used in file permissions (e.g., in Unix/Linux).
let octalNum = 0o77;          // 63 in decimal
let filePerm = 0o644;         // 420 in decimal

// 4. Binary (Base 2)
// Starts with '0b' or '0B'. Uses only 0 and 1.
// Useful for bitwise operations.
let binaryNum = 0b1010;       // 10 in decimal
let flag = 0b11110000;        // 240 in decimal

// 5. Exponential / Scientific Notation
// Uses 'e' or 'E' to indicate the power of 10.
let million = 1e6;            // 1 * 10^6 = 1,000,000
let micro = 1e-6;             // 1 * 10^-6 = 0.000001 (tiny number)

// 6. Numeric Separators (ES2021)
// Uses underscores '_' to make large numbers more readable. The engine ignores them.
let billionSeparated = 1_000_000_000; // Same as 1000000000
let hexSeparated = 0xFF_AA_BB;        // Same as 0xFFAABB

// 7. Special Numeric Values (Type is still "number")
let notANumber = NaN;            // E.g., Result of "abc" / 2
let positiveInfinity = Infinity; // E.g., Result of 1 / 0

// 8. BigInt (ES2020)
// For numbers larger than Number.MAX_SAFE_INTEGER (2^53 - 1). Appends 'n' to the end.
let veryLargeNumber = 9007199254740991n;

// Output check
console.log("Decimal:", decimalInt, "| Hex:", hexNum, "| Binary:", binaryNum, "| Octal:", octalNum);
console.log("Type of NaN:", typeof notANumber, "| Type of BigInt:", typeof veryLargeNumber);
/*
  | Type/Form          | Example            | Notes                          |
  |--------------------|--------------------|--------------------------------|
  | Decimal Integer    | 42                 | Standard whole numbers         |
  | Binary             | 0b1010             | Base 2, starts with 0b         |
  | Octal              | 0o52               | Base 8, starts with 0o         |
  | Hexadecimal        | 0x2A               | Base 16, starts with 0x        |
  | Float              | 3.14               | Decimal numbers                |
  | Exponential        | 1.5e3              | Scientific notation            |
  | Numeric Separator  | 1_000_000          | ES2021+, for readability       |
  | BigInt             | 123n or BigInt(123)| Arbitrary large integers       |
  | Infinity           | Infinity           | Result of division by zero     |
  | NaN                | NaN                | Invalid numeric operation      |
  | Number Object      | new Number(42)     | Avoid, use primitive           |
  */