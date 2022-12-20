// The Math object has many methods that we can use to do calculations and
// operations on numbers. We will go over the most important ones here. You
// can see all the available ones when you use an editor that shows suggestions
// and options during typing.

// Finding the highest and lowest number
// There is a built-in method max() to find the highest number among the
// arguments. You can see it here:

let highest = Math.max(2, 56, 12, 1, 233, 4);
console.log(highest);

// It logs 233 , because that's the highest number. In a similar way, we can
// find the lowest number:

let lowest = Math.min(2, 56, 12, 1, 233, 4);
console.log(lowest);

// It is not giving 3 as output, because it is not ignoring the text but
// concluding that it cannot determine whether hi should be higher or lower
// than 3 . So it returns NaN instead.

let highestOfWords = Math.max("hi", 3, "bye");
console.log(highestOfWords);

// Square root and raising to the power of
// The method sqrt() is used to calculate the square root of a certain number.
// Here you can see it in action:

let result = Math.sqrt(64);
console.log(result);

// This will log 8 , because the square root of 64 is 8 . This method works
// just like the mathematics you learned in school. In order to raise a number
// to a certain power (baseexponent, for example 23
// ), we can use the pow(base,
// exponent) function. Like this:

let result2 = Math.pow(5, 3);
console.log(result2);
// We are raising 5 to the power of 3 here (53
// ), so the result will be 125 ,
// which is the result of 5*5*5.

// Turning decimals into integers
// There are different ways to turn decimals into integers. Sometimes you will
// want to round a number. This you can do with the round() method:

let x = 6.78;
let y = 5.34;
console.log("X:", x, "becomes", Math.round(x));
console.log("Y:", y, "becomes", Math.round(y));

// This will log:
// X: 6.78 becomes 7
// Y: 5.34 becomes 5
// As you can see it is using normal rounding here. It is also possible that you
// don't want to round down, but up. For example, if you need to calculate
// how many wood boards you need and you conclude that you need 1.1 , 1
// is not going to be enough to do the job. You'll need 2 . In this case, you can
// use the ceil() method(referring to ceiling):

console.log("X:", x, "becomes", Math.ceil(x));
console.log("Y:", y, "becomes", Math.ceil(y));
// The ceil() method is always rounding up to the first integer it encounters.
// We have used this before when we were generating random numbers!
// Careful with negative numbers here, because -5 is higher than -6 . This is
// how it works, as you can see in this example:

let negativeX = -x;
let negativeY = -y;
console.log("negativeX:", negativeX, "becomes", Math.ceil(negativeX));
console.log("negativeY:", negativeY, "becomes", Math.ceil(negativeY));

// The floor() method is doing the exact opposite of the ceil() method. It
// rounds down to the nearest integer number, as you can see here:
console.log("X:", x, "becomes", Math.floor(x));
console.log("Y:", y, "becomes", Math.floor(y));

// Again, careful with negative numbers here, because it can feel
// counterintuitive:

console.log("negativeX:", negativeX, "becomes", Math.floor(negativeX));
console.log("negativeY:", negativeY, "becomes", Math.floor(negativeY));

// This logs:
// negativeX: -6.78 becomes -7
// negativeY: -5.34 becomes -6

// And then one last method, trunc() . This gives the exact same result as
// floor() for positive numbers, but it gets to these results differently. It is
// not rounding down, it is simply only returning the integer part:

console.log("X:", x, "becomes", Math.trunc(x));
console.log("Y:", y, "becomes", Math.trunc(y));

// So whenever you need to round down, you'll have to use floor() , if you
// need the integer part of the number, you'll need trunc() .

// Exponent and logarithm
// The exponent is the number to which a base is being raised. We use e
// (Euler's number) a lot in mathematics, this is what the exp() method in
// JavaScript does. It returns the number to which e must be raised to get the
// input. We can use the exp() built-in method of Math to calculate the
// exponent, and the log() method to calculate the natural logarithm. You
// can see an example here:

let x = 2;
let exp = Math.exp(x);
console.log("Exp:", exp);
let log = Math.log(exp);
console.log("Log:", log);

// This will log:
// Exp: 7.38905609893065
// Log: 2
// Don't worry if you can't follow along mathematically at this point. You'll
// figure this out whenever you'll need it for your programming.
