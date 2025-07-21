// Write a function `rotateArray(arr, k)` that takes an array `arr` and an integer `k`, and rotates the array to the right by `k` steps in-place.

function rotateArray(arr, k) {
  if (k < 0 || k > arr.length) {
    return "Invalid input: k must be a non-negative integer less than the length of the array.";
  }
  const firstPart = arr.slice(0, k);
  const secondPart = arr.slice(k, arr.length);

  console.log("First Part:", firstPart);
  console.log("Second Part:", secondPart);

  return secondPart.concat(firstPart);
}

const res = rotateArray([1, 2, 3, 4, 5], 3);
console.log("Final Result:", res);
