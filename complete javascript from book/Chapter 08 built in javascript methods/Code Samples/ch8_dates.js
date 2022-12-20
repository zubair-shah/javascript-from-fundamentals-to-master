// Date methods
// In order to work with dates in JavaScript we use the built-in Date object.
// This object contains a lot of built-in functions to work with dates.

// Creating dates
// There are different ways to create a date. One way to create dates is by
// using the different constructors. You can see some examples here:

let currentDateTime = new Date();
console.log(currentDateTime);
// This will log the current date and time, in this case:
// 2021-06-05T14:21:45.625Z

// But, this way we are not using the built-in method, but the constructor.
// There is a built-in method, now() , that returns the current date and time,
// similar to what the no argument constructor does:
// This will log the current time, represented in seconds since January 1st
// 1970. This is an arbitrary date representing the Unix epoch. In this case:

let now2 = Date.now();
console.log(now2);

let milliDate = new Date(1000);
console.log(milliDate);

// JavaScript can also convert many string formats to a date. Always mind the
// order in which days and months of dates are presented in the date format
// and the interpreter of JavaScript. This can vary depending on the region:

let stringDate = new Date("Sat Jun 05 2021 12:40:12 GMT+0200");
console.log(stringDate);

// And lastly, you can also specify a certain date using the constructor:

let specificDate = new Date(2022, 1, 10, 12, 10, 15, 100);
console.log(specificDate);

// This will log:
// 2022-02-10T12:10:15.100Z
// Please mind this very important detail here, the second parameter is the
// month. 0 is for January and 11 is for December.

// Methods to get and set the elements of a
// date
// Now we have seen how to create dates, we'll learn how to get certain parts
// of dates. This can be done with one of the many get methods. Which you
// will use depends on the part you need:

let d = new Date();
console.log("Day of week:", d.getDay());
console.log("Day of month:", d.getDate());
console.log("Month:", d.getMonth());
console.log("Year:", d.getFullYear());
console.log("Seconds:", d.getSeconds());
console.log("Milliseconds:", d.getMilliseconds());
console.log("Time:", d.getTime());

// This will log right now:
// Day of week: 6
// Day of month: 5
// Month: 5
// Year: 2021
// Seconds: 24
// Milliseconds: 171
// Time: 1622903604171

// The time is so high because it's the number of milliseconds since January 1st
// 1970. You can change the date in a similar way with a set method.
// Important to note here is that the original date object gets changed with
// these set methods:

d.setFullYear(2010);
console.log(d);
// We have changed the year of our date object to 2010. This will output:
// 2010-06-05T14:29:51.481Z

// We can also change the month. Let's add the below snippet to our change of
// the year code. This will change it to October. Please mind that while I'm
// doing this, I run the code again and again, so the minutes and smaller units
// of time will vary in the examples when I haven't set these yet:

// This is a weird one, in order to change the day, we have to call the
// setDate() method and not the setDay() method. There is no setDay()
// method, since the day of the week is deducted from the specific date. We
// cannot change that September 5th 2021 is a Sunday. We can change the
// number of days of the month though:

d.setMonth(9);
console.log(d);

d.setDate(10);
console.log(d);

d.setHours(10);
console.log(d);

// Remember how JavaScript doesn't like to crash? If you call setHours()
// with a number higher than 24, it will roll over to the next date (1 per 24
// hours) and after using the modulo operator, whatever is left over from
// hours % 24 will be the hours. The same process applies for minutes,
// seconds, and milliseconds.

d.setTime(1622889770682);
console.log(d);

// Parsing dates
// With the built-in parse() method we can parse epoch dates from strings. It
// accepts many formats, but again you will have to be careful with the order
// of days and months:

let d1 = Date.parse("June 5, 2021");
console.log(d1);

let d2 = Date.parse("6/5/2021");
console.log(d2);
// The input for the parse is ISO formats of dates. Quite a few formats can be
// parsed to string, but you'll have to be careful. The result might depend on
// the exact implementation. Make sure that you know what the format of the
// incoming string is, so that you don't confuse months and days, and make
// sure that you know the behavior of the implementations. This can only be
// done reliably if you know what the string format is. So for example when
// you need to convert data coming from your own database or website's date
// picker.

// Converting a date to a string
// We can also convert dates back to strings. For example with these methods:

//console.log(d.toDateString());
// This will log the day in written format:
// Sat Jun 05 2021
// This is another method that converts it differently:

// console.log(d.toLocaleDateString());

// It will log:
// 6/5/2021
