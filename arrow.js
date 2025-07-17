function add(a, b) {
  return a + b; // This function takes two parameters and returns their sum
}

// arrow functions are a more concise way to write functions in JavaScript. They can be used in the same way as regular functions, but they have a different syntax. Arrow functions are particularly useful for writing short functions or when you want to preserve the context of `this` in a function.
const subtract = (a, b) => {
  return a - b; // This function takes two parameters and returns their difference
};

console.log(add(5, 3)); // Output: 8
console.log(subtract(10, 4)); // Output: 6

// HOF - Higher-Order Functions are functions that can take other functions as arguments or return functions as their result. They are a powerful feature of JavaScript and are often used in functional programming paradigms.
