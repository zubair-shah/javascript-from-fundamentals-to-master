// Practice exercise 6.7
// Create a countdown loop starting at a dynamic value of 10 .
// 1. Set the start variable at a value of 10 , which will be used as the
// starting value for the loop.
// 2. Create a function that takes one argument, which is the countdown
// value.
// 3. Within the function, output the current value of the countdown into the
// console.
// 4. Add a condition to check if the value is less than 1; if it is, then return
// the function.
// 5. Add a condition to check if the value of the countdown is not less than
// 1, then continue to loop by calling the function within itself.
// 6. Make sure you add a decrement operator on the countdown so the
// preceding condition eventually will be true to end the loop. Every time
// it loops, the value will decrease until it reaches 0.
// 7. Update and create a second countdown using a condition if the value is
// greater than 0. If it is, decrease the value of the countdown by 1.
// 8. Use return to return the function, which then invokes it again and
// again until the condition is no longer true.
// 9. Make sure, when you send the new countdown value as an argument
// into the function, that there is a way out of the loop by using the
// return keyword and a condition that continues the loop if met.

let start = 10;
function loop1(val) {
  console.log(val);
  if (val < 1) {
    return;
  }
  return loop1(val - 1);
}
loop1(start);

function loop2(val) {
  console.log(val);
  if (val > 0) {
    val--;
    return loop2(val);
  }
  return;
}
loop2(start);
