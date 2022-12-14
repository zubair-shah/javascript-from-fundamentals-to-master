// Set timeout order
// Use the arrow format to create functions that output the values one and
// two to the console. Create a third function that outputs the value three to
// the console, and then invokes the first two functions.
// Create a fourth function that outputs the word four to the console and also
// use setTimeout() to invoke the first function immediately and then the
// third function.
// What does your output look like in the console? Try to get the console to
// output:
// Four
// Three
// One
// Two
// One

const one = () => console.log("one");
const two = () => console.log("two");
const three = () => {
  console.log("three");
  one();
  two();
};
const four = () => {
  console.log("four");
  setTimeout(one, 0);
  three();
};
four();
