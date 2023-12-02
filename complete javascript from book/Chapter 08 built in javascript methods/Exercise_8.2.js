// Practice exercise 8.2
// Remove duplicates from the array using filter() and indexOf() . The
// starting array is:
// Using the array filter() method, this will create a new array using the
// elements that pass the test condition implemented by the function. The final
// result will be:
//  [ 'Laurence', 'Mike', 'Larry', 'Kim', 'Joanne' ]
// Take the following steps:
// ["Laurence", "Mike", "Larry", "Kim", "Joanne", "Laurence", "Mike
// 1. Create an array of names of people. Make sure you include duplicates.
// The exercise will remove the duplicate names.
// 2. Using the filter() method, assign the results of each item from the
// array as arguments within an anonymous function. Using the value,
// index, and array arguments, return the filtered result. You can set the
// return value to true temporarily as this will build the new array with
// all the results in the original array.
// 3. Add a console.log call within the function that will output the index
// value of the current item in the array. Also add the value so you can
// see the results of the item value that has the current index number and
// the first matching result from the array's index value.
// 4. Using indexOf() the current value returns the index value of the item
// and applies the condition to check to see if it matches the original
// index value. This condition will only be true on the first result so all
// subsequent duplicates will be false and not get added to the new array.
// false will not return the value into the new array. The duplicates will
// all be false since the indexof() only gets the first match in the array.
// 5. Output the new, unique value array onto the console.

const arr = [
  "Laurence",
  "Mike",
  "Larry",
  "Kim",
  "Joanne",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
  "Laurence",
  "Mike",
];
const arr2 = arr.filter((value, index, array) => {
  console.log(value, index, array.indexOf(value));
  return array.indexOf(value) === index;
});
console.log(arr2);


let caps = "HI HOW ARE YOU?";
let fixed_caps = caps.toLowerCase();
let first_capital = fixed_caps.charAt(0).toUpperCase().concat(fixed_caps.slice(1))
console.log(first_capital);
