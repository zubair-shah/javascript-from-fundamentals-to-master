// Practice exercise 8.7
// Output the date with the full month name into the console. When converting
// to or from arrays, remember that they are zero-based:
// 1. Set up a date object, which can be any date in the future or past. Log
// the date out into the console to see how it is typically output as a date
// object.
// 2. Set up an array with all the named months of the year. Keep them in
// sequential order so that they will match the date month output.
// 3. Get the day from the date object value, using getDate() .
// 4. Get the year from the date object value, using getFullYear() .
// 5. Get the month of the date object value, using getMonth() .
// 6. Set up a variable to hold the date of the date object and output the
// month using the numeric value as the index for the array month name.
// Due to arrays being zero-based and the month returning a value of 1-
// 12, the result needs to be subtracted by one.
// 7. Output the result into the console.

let future = new Date(2025, 5, 15);
console.log(future);
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let day = future.getDate();
let month = future.getMonth();
let year = future.getFullYear();
let myDate = `${months[month - 1]} ${day} ${year}`;
console.log(myDate);
