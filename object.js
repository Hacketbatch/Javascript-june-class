// An Object in JavaScript is a standalone entity, with properties and values.
// It is similar to real-life objects, like a car, which has properties like color, and type like sedan or SUV.
// Objects can also have methods, which are functions that belong to the object.

const car = {
  colors: ["red", "blue", "green"],
  type: "sedan",
  year: 2020,

  onSale: true,
  start: function () {
    console.log("Car started");
  },
};
// anonymous function -  a function without a name

// Accessing values in an object can be done using dot notation or bracket notation.

console.log(car.colors[2]); // Output: green - using dot notation
console.log(car["color"]); // Output: red - using bracket notation

console.log(car.type); // Output: sedan
console.log(car.onSale); // Output: true
// calling a method/FUNCTION
car.start();


// JSON - JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write, and easy for machines to parse and generate.