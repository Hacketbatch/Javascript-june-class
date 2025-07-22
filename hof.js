// Higher Order Functions (HOF) in JavaScript
// HOFs are functions that take other functions as arguments or return them as output. They are a key feature of functional programming in JavaScript.

function greet(username, someArg) {
  console.log("Greetings " + username);
  username = username.toLowerCase();
  //   console.log(someArg + 1);
  someArg(username + "@gmail.com");
}

greet("Albert", function mailer(email) {
  console.log("Sending email to " + email);
});

const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function double(num) {
  console.log(num * 2);
});

// callback functions are functions that are passed as arguments to other functions and are executed after some operation is completed. In the example above, `mailSender` is a callback function that is called within the `greet` function after the greeting message is logged.


// Some array methods expect a function as an argument - e.g. forEach, Map, reduce, sort .... 