// Write a function that takes an array of strings and returns
// an object that counts how many times each string appears.
// Example: const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
// Expected: { apple: 3, banana: 2, orange: 1 }

const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const obj = {};
function count(array) {
  for (let item of array) {
    obj[item] = (obj[item] || 0) + 1;
  }
  return obj;
}
