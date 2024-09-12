// String
// A string is used to store a text value. It is a sequence of characters. There
// are different ways to declare a string:
// Double quotes
// Single quotes
// Backticks: special template strings in which you can use variables
// directly
// The single and double quotes can both be used like so:
// let singleString = 'Hi there!';
// let doubleString = "How are you?";

// Note:You can use the option you prefer, unless you are working on code in which
// one of these options has already been chosen. Again, consistency is key.

// The main difference between single quotes and double quotes is that you
// can use single quotes as literal characters in double-quoted strings, and vice
// versa. If you declare a string with single quotes, the string will end as soon
// as a second quote is detected, even if it's in the middle of a word. So for
// example, the following will result in an error, because the string will be
// ended at the second single quote within let's :

// let funActivity = 'Let's learn JavaScript';
// In the same way with double quotes, the following would not work:
// let question = "Do you want to learn JavaScript? "Yes!"";
// In a string using backticks, you can point to variables and the variable's
// value will be substituted into the line. You can see this in the following code
// snippet:
// let language = "JavaScript";
// let message = `Let's learn ${language}`;
// console.log(message);

// Escape characters

// Say we want to have double quotes, single quotes, and backticks in our
// string. We would have a problem, as this cannot be done with just the
// ingredients we have now. There is an elegant solution to this problem.
// There is a special character that can be used to tell JavaScript, "do not take
// the next character as you normally would." This is the escape character, a
// backslash.
// In this example, the backslash can be used to ensure your interpreter doesn't
// see the single or double quote marks and end either string too early:
// let str = "Hello, what's your name? Is it \"Mike\"?";
// console.log(str);
// let str2 = 'Hello, what\'s your name? Is it "Mike"?';
// console.log(str2);
// This logs the following to the console:
// Hello, what's your name? Is it "Mike"?
// Hello, what's your name? Is it "Mike"?

// The escape character has even more purposes. You can use it to create a line
// break with \n , or to include a backslash character in the text with \\ :
// let str3 = "New \nline.";
// let str4 = "I'm containing a backslash: \\!";
// console.log(str3);
// console.log(str4);
// The output of these lines is as follows:
// New
// line.
// I'm containing a backslash: \!

let singleString = 'Hi there!';
let doubleString = "How are you?";

let language = "JavaScript";
let message = `Let's learn ${language}`;
console.log(message);
