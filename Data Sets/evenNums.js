// Write a function that takes an array of numbers and returns only the even ones.

const nums = [1, 2, 3, 4, 5, 6];

function evenNums(nums) {
  return nums.filter((num) => num % 2 === 0);
}
