// Practice exercise 4.1
// 1. Create a variable with a Boolean value.
// 2. Output the value of the variable to the console.
// 3. Check whether the variable is true and if so, output a message to the
// console, using the following syntax:
// if(myVariable){
// //action
// }
// 4. Add another if statement with an ! in front of the variable to check
// whether the condition is not true, and create a message that will be
// printed to the console in that instance. You should have two if
// statements, one with an ! and the other without. You could also use
// an if and an else statement instead—experiment!
// 5. Change the variable to the opposite to see how the result changes.

// Practice exercise 4.2
// 1. Create a prompt to ask the user's age
// 2. Convert the response from the prompt to a number
// 3. Declare a message variable that you will use to hold the console
// message for the user
// 4. If the input age is equal to or greater than 21, set the message variable
// to confirm entry to a venue and the ability to purchase alcohol
// 5. If the input age is equal to or greater than 19, set the message variable
// to confirm entry to the venue but deny the purchase of alcohol
// 6. Provide a default else statement to set the message variable to deny
// entry if none are true
// 7. Output the response message variable to the console

// Practice exercise 4.3
// 1. Create a Boolean value for an ID variable
// 2. Using a ternary operator, create a message variable that will check
// whether their ID is valid and either allow a person into a venue or not
// 3. Output the response to the console

// Practice exercise 4.4
// As discussed in Chapter 1, Getting Started with JavaScript, the JavaScript
// function Math.random() will return a random number in the range of 0 to
// less than 1, including 0 but not 1. You can then scale it to the desired range
// by multiplying the result and using Math.floor() to round it down to the
// nearest whole number; for example, to generate a random number between
// 0 and 9:
// // random number between 0 and 1
// let randomNumber = Math.random();
// // multiply by 10 to obtain a number between 0 and 10
// randomNumber = randomNumber * 10;
// // removes digits past decimal place to provide a whole number
// RandomNumber = Math.floor(randomNumber);
// In this exercise, we'll create a Magic 8-Ball random answer generator:
// 1. Start by setting a variable that gets a random value assigned to it. The
// value is assigned by generating a random number 0-5, for 6 possible
// results. You can increase this number as you add more results.
// 2. Create a prompt that can get a string value input from a user that you
// can repeat back in the final output.
// 3. Create 6 responses using the switch statement, each assigned to a
// different value from the random number generator.
// 4. Create a variable to hold the end response, which should be a sentence
// printed for the user. You can assign different string values for each
// case, assigning new values depending on the results from the random
// value.
// 5. Output the user's original question, plus the randomly selected case
// response, to the console after the user enters their question.

// Practice exercise 4.5
// 1. Create a variable called prize and use a prompt to ask the user to set
// the value by selecting a number between 0 and 10
// 2. Convert the prompt response to a number data type
// 3. Create a variable to use for the output message containing the value
// " My Selection: "
// 4. Using the switch statement (and creativity), provide a response back
// regarding a prize that is awarded depending on what number is
// selected
// 5. Use the switch break to add combined results for prizes
// 6. Output the message back to the user by concatenating your prize
// variable strings and the output message string

// Chapter projects
// Evaluating a number game
// Ask the user to enter a number and check whether it's greater than, equal to,
// or less than a dynamic number value in your code. Output the result to the
// user.

// Friend checker game
// Ask the user to enter a name, using the switch statement to return a
// confirmation that the user is a friend if the name selected is known in the
// case statements. You can add a default response that you don't know the
// person if it's an unknown name. Output the result into the console

// Rock Paper Scissors game
// This is a game between a player and the computer, where both will make a
// random selection of either Rock, Paper, or Scissors (alternatively, you could
// create a version using real player input!). Rock will beat out Scissors, Paper
// will beat out Rock, and Scissors will beat out Paper. You can use JavaScript
// to create your own version of this game, applying the logic with an if
// statement. Since this project is a little more difficult, here are some
// suggested steps:
// 1. Create an array that contains the variables Rock, Paper, and Scissors.
// 2. Set up a variable that generates a random number 0-2 for the player
// and then do the same for the computer's selection. The number
// represents the index values in the array of the 3 items.
// 3. Create a variable to hold a response message to the user. This can
// show the random results for the player and then also the result for the
// computer of the matching item from the array.
// 4. Create a condition to handle the player and computer selections. If
// both are the same, this results in a tie.
// 5. Use conditions to apply the game logic and return the correct results.
// There are several ways to do this with the condition statements, but
// you could check which player's index value is bigger and assign the
// victory accordingly, with the exception of Rock beating Scissors.
// 6. Add a new output message that shows the player selection versus the
// computer selection and the result of the game.

// Self-check quiz
// 1. What will be outputted to the console in this instance?
// const q = '1';
// switch (q) {
//  case '1':
//  answer = "one";
//  break;
//  case 1:
//  answer = 1;
//  break;
//  case 2:
//  answer = "this is the one";
//  break;
//  default:
//  answer = "not working";
// }
// console.log(answer);
// 2. What will be outputted to the console in this instance?
// const q = 1;
// switch (q) {
//  case '1':
//  answer = "one";
//  case 1:
//  answer = 1;
//  case 2:
//  answer = "this is the one";
//  break;
//  default:
//  answer = "not working";
// }
// console.log(answer);
// 3. What will be outputted to the console in this instance?
// 4. What will be outputted to the console in this instance?
// const userNames = ["Mike", "John", "Larry"];
// const userInput = "John";
// let htmlOutput = "";
// if (userNames.indexOf(userInput) > -1) {
//  htmlOutput = "Welcome, that is a user";
// } else {
//  htmlOutput = "Denied, not a user ";
// }
// console.log(htmlOutput + ": " + userInput);
// 5. What will be outputted to the console in this instance?
// let myTime = 9;
// let output;
// if (myTime >= 8 && myTime < 12) {
//  output = "Wake up, it's morning";
// } else if (myTime >= 12 && myTime < 13) {
//  output = "Go to lunch";
// } else if (myTime >= 13 && myTime <= 16) {
//  output = "Go to work";
// } else if (myTime > 16 && myTime < 20) {
// let login = false;
// let outputHolder = "";
// let userOkay = login ? outputHolder = "logout" : outputHolde
// console.log(userOkay);
//  output = "Dinner time";
// } else if (myTime >= 22) {
//  output = "Time to go to sleep";
// } else {
//  output = "You should be sleeping";
// }
// console.log(output);
// 6. What will be outputted to the console in this instance?
// let a = 5;
// let b = 10;
// let c = 20;
// let d = 30;
// console.log(a > b || b > a);
// console.log(a > b && b > a);
// console.log(d > b || b > a);
// console.log(d > b && b > a);
// 7. What will be outputted to the console in this instance?
// let val = 100;
// let message = (val > 100) ? `${val} was greater than 100` :
// console.log(message);
// let check = (val % 2) ? `Odd` : `Even`;
// check = `${val} is ${check}`;
// console.log(check);
