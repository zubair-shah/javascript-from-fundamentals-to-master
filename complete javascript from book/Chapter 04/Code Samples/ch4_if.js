// Logic Statements
// Up to this point, our code has been rather static. It will do the same thing
// every time we execute it. In this chapter, that is all going to change. We will
// be dealing with logical statements. Logical statements allow us to make
// multiple paths in our code. Depending on the outcome of a certain
// expression, we will follow one code path or another.

// if and if else statements
// We can make decisions in our code using if and if else statements. It is very
// much like this template:
// if *some condition is true*, then *a certain action will happen*, else
// *another action will happen*
// For example, if it is raining then, I will take my umbrella, else I will leave
// my umbrella at home. It is not that much different in code:

// let rain = true;

// if(rain){
//   console.log("** Taking my umbrella when I need to go outside **");
// } else {
//   console.log("** I can leave my umbrella at home **");
// }

// if(expression) {
//   // code associated with the if block
//   // will only be executed if the expression is true
// } else {
//   // code associated with the else block
//   // we don't need an else block, it is optional
//   // this code will only be executed if the expression is false
// }
// Here is another example. If the age is below 18, log to the console that
// access is denied, otherwise log to the console that the person is allowed to
// come in:

let age = 16;

if (age < 18) {
  console.log("We're very sorry, but you can't get in under 18");
} else {
  console.log("Welcome!");
}

// else if statements
// For example, take this statement, to determine what the ticket price should
// be. If a person is younger than 3, then access is free, else if a person is older
// than 3 and younger than 12, then access is 5 dollars, else if a person is older
// than 12 and younger than 65, then access is 10 dollars, else if a person is 65
// or older, then access is 7 dollars:

if (age < 3) {
  console.log("Access is free under three.");
} else if (age >= 3 && age < 12) {
  console.log("With the child discount, the access fee is 5 dollar");
} else if (age >= 12 && age < 65) {
  console.log("A regular ticket costs 10 dollar.");
} else if (age >= 65) {
  console.log("A ticket is 7 dollars.");
}

if (age < 3) {
  console.log("Access is free under three.");
} else if (age < 12) {
  console.log("With the child discount, the access fee is 5 dollar");
} else if (age < 65) {
  console.log("A regular ticket costs 10 dollar.");
} else if (age >= 65) {
  console.log("A ticket is 7 dollars.");
}

// Conditional ternary operators
// operand1 ? operand2 : operand3;
// operand1 is the expression that is to be evaluated. If the value of the
// expression is true , operand2 gets executed. If the value of the expression
// is false , operand3 gets executed. You can read the question mark as
// "then" and the colon as "else" here:

let access = age < 18 ? "denied" : "allowed";
console.log(access);

age < 18 ? console.log("denied") : console.log("allowed");
