// A function is a reusable block of code that performs a specific task. Functions help organize code, make it more readable, and allow for code reuse. They can be defined with parameters to accept inputs and can return values as outputs.

// Functions can take inputs (parameters) and return outputs (values).

// Creating/Declaring a function
function add(a, b) {
  return a + b; // This function takes two parameters and returns their sum
  console.log("Adding two numbers:", a, b); // This logs the values of a and b to the console
}

function sendEmail(recipient, content) {
  console.log(`Sending email to ${recipient} with content: ${content}`); // Putting a variable inside a string using template literals - the backticks and the dollar sign
  // string concatenation is another way to combine strings and variables
  console.log("Email sent to " + recipient + " with content: " + content);
  return { status: "success", message: "Email sent successfully!" }; // Returning an object with status and message
}

function calculateArea(length, width) {
  return length * width;
}

function alert() {
  console.log("This is an alert message!");
}

// a function without a return statement automatically returns undefined. A return statement is used to specify the value that should be returned from the function when it is called.(the result of the function execution)

// Calling/Invoking a function - code in a function is not executed until the function is called
const res1 = add(5, 4); //
const res2 = add(12, 40);
console.log(res1);
console.log(res2);

alert();
