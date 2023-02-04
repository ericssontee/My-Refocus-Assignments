const arr = [
  "Web Developer",
  "Refocus",
  "Web Developer",
  "Web Developer",
  "Refocus",
  "Awesome",
];
// array.reduce is used to used to reduce the array to a single value and executes a provided function for each value of the array (from left-to-right) and the return value of the function is stored in an accumulator.
// https://www.geeksforgeeks.org/javascript-array-reduce-method/#:~:text=The%20Javascript%20arr.,is%20stored%20in%20an%20accumulator.
const countArr = arr.reduce((accumulator, value) => {
  accumulator[value] = ++accumulator[value] || 1;
  return accumulator;
}, {});

console.log(countArr)