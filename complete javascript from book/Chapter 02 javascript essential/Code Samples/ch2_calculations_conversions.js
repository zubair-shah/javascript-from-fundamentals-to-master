// Converting data types
// The variables in JavaScript can change types. Sometimes JavaScript does
// this automatically. What do you think the result of running the following
// code snippet will be?
// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 * nr2);
// We try to multiply a variable of type Number with a variable of type String.
// JavaScript does not just throw an error (as many languages would), but first
// tries to convert the string value to a number. If that can be done, it can
// execute without any problem as if two numbers were declared. In this case,
// console.log() will write 4 to the console.
// But this is dangerous! Guess what this code snippet does:
// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 + nr2);
// This one will log 22 . The plus sign can be used to concatenate strings.
// Therefore, instead of converting a string to a number, it is converting a
// number to a string in this example, and clubbing the two strings together
// —" 2 " and " 2 " make " 22 ". Luckily, we do not need to rely on
// JavaScript's behavior when converting data types. There are built-in
// functions we can use to convert the data type of our variable.
// There are three conversion methods: String() , Number() , and
// Boolean() . The first one converts a variable to type String. It pretty much
// takes any value, including undefined and null, and puts quotes around it.
// The second one tries to convert a variable to a number. If that cannot be
// done logically, it will change the value into NaN (not a number).
// Boolean() converts a variable to a Boolean. This will be true for
// everything except for null, undefined, 0 (number), an empty string, and
// NaN. Let's see them in action:

// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 * nr2);

// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 + nr2);

// let nrToStr = 6;
// nrToStr = String(nrToStr);
// console.log(nrToStr, typeof nrToStr);

// let strToNr = "12";
// strToNr = Number(strToNr);
// console.log(strToNr, typeof strToNr);

// let strToBool = "any string will return true";
// strToBool = Boolean(strToBool);
// console.log(strToBool, typeof strToBool);

// let nullToNr = null;
// nullToNr = Number(nullToNr);
// console.log("null", nullToNr, typeof nullToNr);

// let strToNr = "";
// strToNr = Number(strToNr);
// console.log("empty string", strToNr, typeof strToNr);

// let strToNr2 = "hello";
// strToNr2 = Number(strToNr2);
// console.log(strToNr2, typeof strToNr2);

// let strToBool = "";
// strToBool = Boolean(strToBool);
// console.log(strToBool, typeof strToBool);

// let strToBool2 = "false";
// strToBool2 = Boolean(strToBool2);
// console.log(strToBool2, typeof strToBool2);

// let nr1 = 2;
// let nr2 = "2";
// console.log(nr1 + Number(nr2));
