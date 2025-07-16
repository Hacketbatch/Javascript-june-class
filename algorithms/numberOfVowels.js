// Write a function that returns the number of vowels in a string.
function countVowels(inputString) {
  // Initialize a counter variable to store the number of vowels
  // Convert the input string to lowercase to handle case insensitivity
  // Define a string containing all vowels for easy checking
  // Use a loop to iterate through each character in the input string
  // Check if the current character is a vowel by checking if it exists in the vowels string
  // If it is a vowel, increment the counter
  // After the loop, return the total count of vowels found in the input string
  let count = 0;
  const vowels = "aeiouAEIOU";
  for (let i = 0; i < inputString.length; i++) {
    if (vowels.includes(inputString[i])) {
      count++;
    }
  }
  return count;
}

console.log("albert".length);
console.log("albrert"[4]);
console.log(countVowels("albert")); // Output: 2
console.log(countVowels("Hello World")); // Output: 3
console.log(countVowels("JavaScript is fun!")); // Output: 5
