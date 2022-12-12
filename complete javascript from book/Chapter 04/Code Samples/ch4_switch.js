// switch statements
// If else statements are great for evaluating Boolean conditions. There are
// many things you can do with them, but in some cases, it is better to replace
// them with a switch statement. This is especially the case when evaluating
// more than four or five values.

let activity = "Lunch";

if (activity === "Get up") {
  console.log("It is 6:30AM");
} else if (activity === "Breakfast") {
  console.log("It is 7:00AM");
} else if (activity === "Drive to work") {
  console.log("It is 8:00AM");
} else if (activity === "Lunch") {
  console.log("It is 12.00PM");
} else if (activity === "Drive home") {
  console.log("It is 5:00PM");
} else if (activity === "Dinner") {
  console.log("It is 6:30PM");
}
// It is determining what the time is based on what we are doing. It would be
// better to implement this using a switch statement. The syntax of a switch
// statement looks like this:v

switch (expression) {
  case value1:
    // code to be executed
    break;
  case value2:
    // code to be executed
    break;
  case value - n:
    // code to be executed
    break;
}
// You can read it in your head as follows: If the expression equals value1 ,
// do whatever code is specified for that case. If the expression equals
// value2 , do whatever code is specified for that case, and so on.

// Here is how we can rewrite our long if else statement in a much cleaner
// manner using a switch statement:

switch (activity) {
  case "Get up":
    console.log("It is 6:30AM");
    break;
  case "Breakfast":
    console.log("It is 7:00AM");
    break;
  case "Drive to work":
    console.log("It is 8:00AM");
    break;
  case "Lunch":
    console.log("It is 12:00PM");
    break;
  case "Drive home":
    console.log("It is 5:00AM");
    break;
  case "Dinner":
    console.log("It is 6:30PM");
    break;
}
// What's up with all these breaks, you may be wondering? If you do not use
// the command break at the end of a case, it will execute the next case as
// well. This will be done from the case where it has a match, until the end of
// the switch statement or until we encounter a break statement. This is what
// the output of our switch statement would be without breaks for the Lunch
// activity:

// The default case
// There is one part of switch that we have not worked with yet, and that is a
// special case label, namely, default . This works a lot like the else part of
// an if else statement. If it does not find a match with any of the cases and a
// default case is present, then it will execute the code associated with the
// default case. Here is the template of a switch statement with a default case:

switch (expression) {
  case value1:
    // code to be executed
    break;
  case value2:
    // code to be executed
    break;
  case value - n:
    // code to be executed
    break;
  default:
    // code to be executed when no cases match
    break;
}

if (false) {
  // omitted to not make this unnecessarily long
} else {
  console.log(
    "I don't know this activity and cannot determine the current time."
  );
}

switch (activity) {
  case "Get up":
    console.log("It is 6:30AM");
    break;
  case "Breakfast":
    console.log("It is 7:00AM");
    break;
  case "Drive to work":
    console.log("It is 8:00AM");
    break;
  case "Lunch":
    console.log("It is 12:00PM");
    break;
  case "Drive home":
    console.log("It is 5:00AM");
    break;
  case "Dinner":
    console.log("It is 6:30PM");
    break;
  default:
    console.log("I cannot determine the current time.");
    break;
}

// Combining cases
// Sometimes, you would want to do the exact same thing for multiple cases.
// In an if statement, you would have to specify all the different or ( || )
// clauses. In a switch statement, you can simply combine them by putting
// them on top of each other like this:

// let grade = "F";

// switch(grade){
//   case "F":
//   case "D":
//     console.log("You've failed!");
//     break;
//   case "C":
//   case "B":
//     console.log("You've passed");
//     break;
//   case "A":
//     console.log("Nice!");
//     break;
//   default:
//     console.log("I don't know this grade.");
// }

// if(grade === "F" || grade === "D") {
//   console.log("You've failed!");
// } else if(grade === "C" || grade === "B") {
//   console.log("You've passed");
// } else if(grade === "A") {
//   console.log("Nice!");
// } else {
//   console.log("I don't know this grade.");
// }
