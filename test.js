const arr = [1, 2, 4, 55, 5];

// arr.push("jnfjdx");
// arr.push([32, 32]);

console.log(arr);

function doubleNumber(theNumber) {
  console.log(theNumber * 2);
}

arr.forEach(doubleNumber);


function tester(el) {
  if (el % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

const res = arr.filter( tester );


// const res = arr.filter(el => el%2 == 0 );

console.log(res);
