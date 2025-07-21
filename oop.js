// OOP -

const user = {
  name: "John",
  age: 30,
  greet() {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};

const student = new Object(user); // Creating a new object using the Object constructor- the student object is a child of the user object - inherits properties and methods from the user object

console.log(student.name);

// Global objects in JavaScript are objects that are available in the global scope, meaning they can be accessed from anywhere in your code. These objects provide various functionalities and are part of the JavaScript environment.example, the `Math` object provides mathematical functions and constants, while the `Date` object allows you to work with dates and times. Other global objects include `Array`, `String`, `Number`, `JSON`, and `RegExp`.

Math.PI;

const username = "albertkip"; /// creating an instance of a string object

// String

const marks = [92, 34, 45, 67, 89, 100]; // creating an instance of an array object

marks.length