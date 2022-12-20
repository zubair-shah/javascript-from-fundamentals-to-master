// String methods
// We have worked with strings already and chances are that you have run into
// some of the methods on strings by now. There are a few we didn't address
// specifically just yet and we are going to discuss them in this section.

// Combining strings
// When you want to concatenate strings, you can use the concat() method.
// This does not change the original string(s); it returns the combined result as
// a string. You will have to capture the result in a new variable, else it will get
// lost:

let s1 = "Hello ";
let s2 = "JavaScript";
let result = s1.concat(s2);
console.log(result);

// Converting a string to an array
// With the split() method we can convert a string to an array. Again, we
// will have to capture the result; it is not changing the original string. Let's
// use the previous result containing Hello JavaScript . We will have to tell
// the split method on what string it should split. Every time it encounters
// that string, it will create a new array item:

let result = "Hello JavaScript";
let arr_result = result.split(" ");
console.log(arr_result);
// This will log:
// [ 'Hello', 'JavaScript' ]

// As you can see, it creates an array of all the elements separated by a space.
// We can split by any character, for example a comma:
// let favoriteFruits = "strawberry,watermelon,grapefruit";
// let arr_fruits = favoriteFruits.split(",");
// console.log(arr_fruits);

let favoriteFruits = "strawberry,watermelon,grapefruit";
let arr_fruits = favoriteFruits.split(",");
console.log(arr_fruits);

// Converting an array to a string
// With the join() method you can convert an array to a string. Here is a
// basic example:

// let letters = ["a", "b", "c"];
// let x = letters.join();
// console.log(x);

// let letters = ["a", "b", "c"];
// let x = letters.join("-");
// console.log(x);

// This will use the – instead of the comma. This is the result:
//   a-b-c

// Working with index and positions
// Being able to find out what index a certain substring is at within your string
// is very useful. For example, when you need to search for a certain word
// through the user input of a log file and create a substring starting at that
// index. Here is an example of how to find the index of a string. The
// indexOf() method returns the index, a single number, of the first character
// of the substring:

let poem = "Roses are red, violets are blue, if I can do JS, then you can too!";
let index_re = poem.indexOf("re");
console.log(index_re);
// This is logging 7 to the console, because the first occurrence of re is in
// are , and the re begins at index 7 . When it can't find an index, it will
// return -1 , like this example:

let indexNotFound = poem.indexOf("python");
console.log(indexNotFound);

if (poem.indexOf("python") != -1) {
  // do stuff
}

// An alternative way of searching for a particular substring within a string is
// to use the search() method:

let searchStr = "When I see my fellow, I say hello";
let pos = searchStr.search("lo");
console.log(pos);

// This will log 17 , because that is the index of lo in fellow . Much like
// indexOf() , if it cannot find it, it will return -1 . This is the case for this
// example:

let notFound = searchStr.search("JavaScript");
console.log(notFound);

// search() will accept a regex format as input, whereas indexOf() just
// takes a string. indexOf() is faster than the search() method, so if you just
// need to look for a string, use indexOf() . If you need to look for a string
// pattern, you'll have to use the search() method.

// Regex is a special syntax for defining string patterns, with which you can
// replace all occurrences, but we'll deal with that in Chapter 12, Intermediate
// JavaScript.

// Moving on, the indexOf() method is returning the index of the first
// occurrence, but similarly, we also have a lastIndexOf() method. It returns
// the index where the argument string occurs last. If it cannot find it, it returns
// -1 . Here is an example:

let lastIndex_re = poem.lastIndexOf("re");
console.log(lastIndex_re);

// This returns 24 ; this is the last time re appears in our poem. It is the
// second are .

// Sometimes you will have to do the reverse; instead of looking for what
// index a string occurs at, you will want to know what character is at a certain
// index position. This is where the charAt(index) method comes in handy,
// where the specified index position is taken as an argument:

let pos1 = poem.charAt(10);
console.log(pos1);

// This is logging r , because the character at index 10 is the r of red . If
// you are asking for the position of an index that is out of the range of the
// string, it will return an empty string, as is happening in this example:

let pos2 = poem.charAt(1000);
console.log(pos2);

// This will log an empty line to the screen, and if you ask for the type of
// pos2 , it will return string .

// Creating substrings
// With the slice(start, end) method we can create substrings. This does
// not alter the original string, but returns a new string with the substring. It
// takes two parameters, the first is the index at which it starts and the second
// is the end index. If you leave out the second index it will just continue until
// the end of the string from the start. The end index is not included in the
// substring. Here is an example:

let str = "Create a substring";
let substr1 = str.slice(5);
let substr2 = str.slice(0, 3);
console.log("1:", substr1);
console.log("2:", substr2);

// This will log:
// 1: e a substring
// 2: Cre

// Replacing parts of the string
// If you need to replace a part of the string, you can use the replace(old,
// new) method. It takes two arguments, one string to look for in the string and
// one new value to replace the old value with. Here is an example:
// let hi = "Hi buddy";
// let new_hi = hi.replace("buddy", "Pascal");
// console.log(new_hi);
// This will log to the console Hi Pascal . If you don't capture the result, it is
// gone, because the original string will not get changed.

let hi = "Hi buddy";
let new_hi = hi.replace("buddy", "Pascal");
console.log(new_hi);

//If the string you are
// targeting doesn't appear in the original string, the replacement doesn't take
// place and the original string will be returned:
let new_hi2 = hi.replace("not there", "never there");
console.log(new_hi2);

// One last note here, it is only changing the first occurrence by default. So
// this example will only replace the first hello in the new string:

let s3 = "hello hello";
let new_s3 = s3.replace("hello", "oh");
console.log(new_s3);

//  If we wanted to replace all the occurences, we could
// use the replaceAll() method. This will replace all occurrences with the
// specified new string, like this:

let s3 = "hello hello";
let new_s3 = s3.replaceAll("hello", "oh");
console.log(new_s3);
//This logs oh oh

// Uppercase and lowercase
// We can change the letters of a string with the toUpperCase() and
// toLowerCase() built-in methods on string . Again, this is not changing
// the original string, so we'll have to capture the result:

let low_bye = "bye!";
let up_bye = low_bye.toUpperCase();
console.log(up_bye);
// This logs:
// BYE!

// It converts all the letters to uppercase. We can do the opposite with
// toLowerCase() :

let caps = "HI HOW ARE YOU?";
let fixed_caps = caps.toLowerCase();
console.log(fixed_caps);
// This will log:
// hi how are you?
// Let's make it a bit more complicated and say that we'd like the first letter of
// the sentence to be capitalized. We can do this by combining some of the
// methods we have seen already right now:

let caps = "HI HOW ARE YOU?";
let fixed_caps = caps.toLowerCase();
let first_capital = fixed_caps
  .charAt(0)
  .toUpperCase()
  .concat(fixed_caps.slice(1));
console.log(first_capital);

// The start and end of a string
// Sometimes you would want to check what a string starts or ends with.
// You've guessed it, there are built-in methods for this on string . We can
// imagine this chapter is tough to work through, so here is a little
// encouragement and an example at the same time

let encouragement = "You are doing great, keep up the good work!";
let bool_start = encouragement.startsWith("You");
console.log(bool_start);
// This will log true to the console, because the sentence starts with You .
// Careful here, because it is case sensitive. So the following example will log
// false :

let bool_start2 = encouragement.startsWith("you");
console.log(bool_start2);

// If you don't care about uppercase or lowercase, you can use the previously
// discussed toLowerCase() method here, so that it will not take uppercase or
// lowercase into account:

// We are now converting the string to lowercase first, so we know we are
// only working with lowercase characters here. However, an important side
// note here is that this will affect performance for huge strings.
// Again, a more performance-friendly alternative is to use

// To end this section, we can do the same thing for checking whether a string
// ends with a certain string. You can see it in action here:

let bool_start3 = encouragement.toLowerCase().startsWith("you");
console.log(bool_start3);


let bool_end = encouragement.endsWith("Something else");
console.log(bool_end);
// Since it doesn't end with Something else , it will return false .
