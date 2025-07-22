function test(el) {
  if (el.includes("e")) {
    return true;
  } else {
    return false;
  }
}

const arr = ["albert", "peter", "joy", "bildard", "jehovah", "Vincent"];

const res = arr.filter(test);

// const res = arr.filter(el => el%2 == 0 );

console.log(res);

const newRes = arr.map(function asignEmail(username) {
  const email = username + "@eldohub.com";
  return email;
});

console.log(newRes);
