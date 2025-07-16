// Write a function that returns the index of the first negative number in an array, or -1 if there are none.

function firstNegativeIndex(input) {
  // Iterate through the array using a loop(for loop or while loop)
  for (let index = 0; index < input.length; index++) {
    // Check if the current element is negative, and return its index if found
    if (input[index] < 0) {
      return index; // Return the index of the first negative number
    }
  }//end of for loop
  return -1; // Return -1 if no negative number is found
}

// [1, -2, 3, -4, 5] should return 1
// [1, 2, 3, 4, 5] should return -1
// [-1, -2, -3] should return 0
// [21,2,12,11,-3] should return 4

console.log(firstNegativeIndex([1, 2, 3, 4, 5])); // -1 since there are no negative numbers
console.log(firstNegativeIndex([1, -2, 3, -4, 5])); // 1 since -2 is the first negative number at index 1
console.log(firstNegativeIndex([-1, -2, -3])); // 0 since -1 is the first negative number at index 0
console.log(firstNegativeIndex([21, 2, 12, 11, -3])); // 4 since -3 is the first negative number at index 4
