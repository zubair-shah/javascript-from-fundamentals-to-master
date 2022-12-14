// Practice exercise 5.7
// In this exercise, we will experiment with looping over objects and internal
// arrays.
// 1. Create a simple object with three items in it.
// 2. Using the for in loop, get the properties' names and values from the
// object and output them into the console.
// 3. Create an array containing the same three items. Using either the for
// loop or the for in loop, output the values from the array into the
// console.

const obj = {
  a: 1,
  b: 2,
  c: 3,
};
for (let prop in obj) {
  console.log(prop, obj[prop]);
}
const arr = ["a", "b", "c"];
for (let w = 0; w < arr.length; w++) {
  console.log(w, arr[w]);
}

for (el in arr) {
  console.log(el, arr[el]);
}
