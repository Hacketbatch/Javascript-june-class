// Javascript as other languages, provide a set of methods/functions to manipulate strings.
// These methods can be used to perform various operations such as searching, replacing, and formatting strings.

// Example: Using string methods to manipulate a string
const fullName = "Albert Kipchirchir        ";

// 1. Length of the string
const lengthOfFullName = fullName.length;
console.log(lengthOfFullName);
// 2. Convert to uppercase
const upperCaseFullName = fullName.toUpperCase();
console.log(upperCaseFullName); // "ALBERT KIPCHIRCHIR        "
// 3. Convert to lowercase
const lowerCaseFullName = fullName.toLowerCase();
console.log(lowerCaseFullName); // "albert kipchirchir        "
// 4. Extract a substring
const firstName = fullName.substring(7, 10); // "Kip"
console.log(firstName);
// 5. Find the index of a character
const indexOfK = fullName.indexOf("K"); // 7
// 6. Replace a substring
const replacedFullName = fullName.replace("Kipchirchir", "Kiprop"); // "Albert Kip"
console.log(replacedFullName);
// 7. Split the string into an array
const nameParts = fullName.split(""); // ["Albert", "Kipchirchir"]
console.log(nameParts);
// 8. Trim whitespace from both ends
const trimmedFullName = fullName.trim(); // "Albert Kipchirchir"
console.log(trimmedFullName.split("")); // "Albert Kipchirchir"
// 9. Check if the string starts with a specific substring
const startsWithAlbert = fullName.startsWith("A"); // true - Usecase- when implementing a search feature in a web application\
// to check for a character in a string
const email = "albertkip@gmail.com";
console.log(email.includes("*")); // true - Usecase- when validating an email address to check if it contains '@'
