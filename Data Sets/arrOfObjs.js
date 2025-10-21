// Return an array of names of users who are 18 or older.
// Expected: ["Ali", "Nihad"]

const users = [
  { name: "Ali", age: 19 },
  { name: "Nihad", age: 24 },
  { name: "Leyla", age: 17 },
];

function arrayManipulation(array) {
  return array.filter((item) => item.age >= 18).map((item) => item.name);
}
