// Operators in Javascript

// Operators in JavaScript are special symbols or keywords that perform operations on values or variables. They can be categorized into several types based on their functionality. Here are some common types of operators in JavaScript:

// 1. Arithmetic Operators: Used for mathematical calculations. Examples: +, -, *, /, %
console.log(5 % 3); // modulus operator, returns the remainder of a division operation
let dayNumber = 34;

if (dayNumber % 4 == 0) {
  console.log("Alert! send your cut");
}

// 2. Assignment Operators: Used to assign values to variables. Examples: =, +=, -=, *=, /=, %=. ++, --

dayNumber += 10; // add 10 to dayNumber ---- dayNumber = dayNumber + 10;
console.log(dayNumber);

// 3. Comparison Operators: Used to compare values and return a boolean result. Examples: ==, ===, !=, !==, <, >, <=, >=.
console.log("fiVe" == "five"); // loose equality, checks only value
console.log(5 === "5"); // strict equality, checks both value and type
console.log(32 > 20); // true

let age = 26;

if (age >= 21) {
  console.log("Allowed into the website");
  console.log("Allowed into the website");
}

let location = "Nairobi";

// 4. Logical Operators: Used to perform logical operations on boolean values. Examples: && (AND), || (OR), ! (NOT).
if (age >= 31 || location == "Nairobi") {
  console.log("Allowed into the website");
}

console.log(!31 > 20);

// nested conditional statements

// The truth table for logical operators:

// 5. Ternary Operator: A shorthand for conditional statements. condition ? valueIfTrue : valueIfFalse.

console.log(54 < 30 ? "albert" : "joseph");
