//  Write a function that takes an array of numbers and returns the sum of all the numbers.

function getSumOfNumbers(inputArray) {
  let sum = 0;
  let index = 0;
  while (index < inputArray.length) {
    sum = sum + inputArray[index];
    index++;
  }

  return sum;
}
// [1,2,3] --
const result1 = getSumOfNumbers([1, 2, 3]);
console.log(result1);

const result2 = getSumOfNumbers([12, 11, 13, 90, 8, 9]);
console.log(result2);
