// Javascript data types can be categorized into two main types: primitive and non-primitive (or reference) types.
// Primitive/simple types include: string, number, boolean, null, undefined
// Non-primitive/complex/composite types include: object, array, and function.

// Data types in JavaScript are the different kinds of values that can be stored and manipulated within the language. Understanding data types is crucial for effective programming in JavaScript.

let email878675 = "albert@eldohub.co.ke"; // string -- names, passwords, location, country etc
let age = 30; // number -- age, height, weight, temperature etc include decimal numbers
let isActive = true; // boolean -- true or false values, such as isLoggedIn, isAdmin, isVerified etc
let isKenyan = false;
let isLoading = true;

// null - Null is a special value that represents the intentional absence of any object value. It is often used to indicate that a variable has been explicitly set to have no value.
let user = null; // user is intentionally set to have no value - empty cup

let userName; // undefined - userName is declared but not assigned a value yet - empty cup

// Array - a list of items, which can be of any data type. Arrays are used to store multiple values in a single variable. They are ordered collections of values and can contain elements of different types, including other arrays or objects.

let fruits = ["apple", "banana", "orange"]; // array of strings
let numbers = [1, 2, 3, 4, 5]; //
// array of numbers
let mixedArray = [
  "apple",
  42,
  true,
  [1, 2, 3],
  { isReady: true, email: "test@example.com" },
  null,
]; // array with mixed data
let coordinates = [
  [1, 2],
  [3, 4],
  [5, 6],
]; // array of arrays (2D array)
let marks = [80, 90, 75, 85]; // array of numbers representing marks

// Object - a collection of key-value pairs, where each key is a string and the value can be of any data type. Objects are used to represent complex data structures and can contain properties and methods.
let userProfile = {
  name: "Albert",
  age: 30,
  isActive: true,
  address: {
    city: "Nairobi",
    country: "Kenya",
  },
  hobbies: ["reading", "coding", "traveling"],
}; // object with properties and nested objects/arrays

// Function - a block of code that can be called and executed. Functions can take parameters and return values. They are used to encapsulate reusable logic and perform specific tasks.
function greet(name) {
  return `Hello, ${name}!`;
} // function that takes a name as a parameter and returns a greeting message
greet("Albert"); // calling the function with "Albert" as an argument
greet("Jane"); // calling the function with "Jane" as an argument

// Explore operators in Javascript

// The truth table
//  ++var var++ , == === ,
// truthy and falsy values

// control flow statements - conditions and loops
