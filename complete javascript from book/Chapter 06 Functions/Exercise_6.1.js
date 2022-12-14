// Practice exercise 6.1
// See if you can write a function for yourself. We want to write a function
// that adds two numbers.
// 1. Create a function that takes two parameters, adds the parameters
// together, and returns the result.
// 2. Set up two different variables with two different values.
// 3. Use your function on the two variables, and output the result using
// console.log .
// 4. Create a second call to the function using two more numbers as
// arguments sent to the function.

function adder(a, b) {
  return a + b;
}
const val1 = 10;
const val2 = 20;
console.log(adder(val1, val2));
console.log(adder(20, 30));
