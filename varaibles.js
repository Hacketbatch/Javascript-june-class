// Varaibles are used to store data that can be used throughout the application.
// They can be used to store configuration settings, user preferences, or any other data that needs to be accessed globally.

// In js , we can create variables using the `var`, `let`, or `const` keywords.

// Keywords in programming languages are reserved words that have special meaning in the language. They are used to define the structure and behavior of the code. In JavaScript, keywords include `var`, `let`, `const`, `function`, `if`, `else`, `for`, `while`, and many others.

// var was the original way to declare variables in JavaScript. Because of scope issues, it is now recommended to use let and const instead.
var username = "Albert";

// let is used to declare variables that can be reassigned later. It has block scope, meaning it is only accessible within the block it is defined in.
let age = 30;

// const is used to declare variables that cannot be reassigned. It is also block scoped.
const PI = 3.14;

const role = "distributor";
const rolE = "distributor";
let darkMode = false;
// let variables can be reassigned, but const variables cannot be reassigned.
age = 31;
// pi = 3.2;

// let if = "myFunction"; // This is not allowed because 'function' is a reserved keyword in JavaScript.

// TASK 2: Explain variable naming rules and conventions in JavaScript.

/**
 * Variable naming rules in JavaScript:
 * 1. Variable names must start with a letter, underscore (_), or dollar sign ($
 * 2. Variable names can contain letters, numbers, underscores, and dollar signs.
 * 3. Variable names are case-sensitive, meaning `myVariable` and `myvariable
 * are considered different variables.
 * 4. Variable names cannot be a reserved keyword (e.g., `var`, `let`, `const`, `function`, `if`, `else`, etc.).
 */

// Variable naming conventions in JavaScript:
/**
 * 1. Use camelCase for variable names (e.g., `myVariableName`), snake_case (e.g., `my_variable_name`), or kebab-case (e.g., `my-variable-name`) for readability.
 * 2. Use descriptive names that clearly indicate the purpose of the variable (e.g.,    '
 * 
 * `userAge`, `is_logged_in`, `totalPrice`).
 * 3. Avoid using single-letter variable names except for loop counters (e.g., `i`, `j`, `k`).
 * 4. Use meaningful names for constants, often in uppercase with underscores (e.g., `MAX_USERS`, `API_URL`).
 * 5. Avoid using abbreviations or acronyms unless they are widely recognized (e.g., `URL`, `HTML`, `CSS`).
 * 6. Keep variable names concise but descriptive enough to understand their purpose.
 * 7. Use prefixes or suffixes to indicate the type or purpose of the variable (e.g., `isActive`, `userList`, `tempValue`).
 *  8. Avoid using special characters or spaces in variable names.
 * 
*/
let patientTemparature = 39;
