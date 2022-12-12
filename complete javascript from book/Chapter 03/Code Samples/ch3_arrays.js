// JavaScript Multiple Values
// The basic data types have been dealt with in the previous chapter. Now it's
// time to look at a slightly more complicated topic: arrays and objects. In the
// previous chapter, you saw variables that held just a single value. To allow
// for more complex programming, objects and arrays can contain multiple
// values.
// An example of an object can be a real-life
// object, for example, a dog. It has properties, such as name, weight, color,
// and breed.

// Arrays and their properties
// Arrays are lists of values. These values can be of all data types and one
// array can even contain different data types. It is often very useful to store
// multiple values inside one variable; for example, a list of students,
// groceries, or test scores. Once you start writing scripts, you'll find yourself
// needing to write arrays very often; for example, when you want to keep
// track of all the user input, or when you want to have a list of options to
// present to the user.

// Creating arrays
// You might be convinced by now that arrays are great, so let's see how we
// can make them. There is actually a right way and a wrong way to do it.
// Here are both. Which one do you think is the right one?

arr1 = new Array("purple", "green", "yellow");
arr2 = ["black", "orange", "pink"];

// Probably, you sense that something is up here. They do not both create an
// array with one value, 10 . The second one, arr4 , does. The first option
// creates an array with 10 undefined values. If we log the values like this:

arr3 = new Array(10);
arr4 = [10];

console.log(arr3);
console.log(arr4);

// Accessing elements
// This beautiful array we just made would become much more powerful if we
// could access its elements. We can do this by referencing the array's index.
// This is something we did not specify when we created the array, and we did
// not need to either. JavaScript assigns an index to every value of the array.
// The first value is assigned the position of 0, the second 1, the third 2, and so
// on. If we want to call a specific value based on its position in the array, we
// can use the name of our array, add square brackets to the end, and put the
// index we want to access between the square brackets, like this:
// The third element in our array has index 2, so this one will log Volkswagen .
// What do you think will happen if we use a negative index or an index that is
// higher than the number of values we get?

// We didn't assign a value to the negative or non-existent index, so when we
// ask for it, the value is undefined. As such, the log output will be undefined.
// JavaScript does not throw an error because of this.

cars = ["Toyota", "Renault", "Volkswagen"];
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[-1]);

// Overwriting elements
// The elements in an array can be overwritten. This can be done by accessing
// a certain element using the index and assigning a new value:
cars[0] = "Tesla";
console.log(cars[0]);

// What happens if you try to overwrite an element that does not exist?
// cars[3] = "Kia";
// Or even a negative index?
cars[-1] = "Fiat";

cars[3] = "Kia";
cars[-1] = "Fiat";
// Let's see what happens when we try to write the values to the console:
console.log(cars[3]);
console.log(cars[-1]);
// Ha! They suddenly exist. How is that you may wonder? We will discuss this
// in the next section. For now, just remember that this is not the right way to
// add values to the array. We will discuss the right way when we explain
// arrays in the Array methods section.

// type of elements remain same
// arr = ["hi there", 5, true];
// console.log(typeof arr[0]);
// console.log(typeof arr[1]);
// console.log(typeof arr[2]);

colors = ["black", "orange", "pink"];
booleans = [true, false, false, true];
emptyArray = [];

// Built-in length property
// Arrays have a very useful built-in property: length. This will return the
// number of values that the array has:

console.log("Length of colors:", colors.length);
console.log("Length of booleans:", booleans.length);
console.log("Length of emtpy array:", emptyArray.length);
// So, be aware that the length is one higher than the maximum index because
// the index of the array starts at 0, but when determining the length, we look
// at the number of elements and there are four separate elements. This is why
// the maximum index is 3 when the length is 4. Hence, the positional value of
// the last element in the array will be one fewer than the total number of
// elements.

// Take a moment and try to figure out how you can use the length to access
// the last element of the array:

lastElement = colors[colors.length - 1];
console.log(lastElement);
// You get the highest index by subtracting 1 from the length because, as you
// know, arrays are zero-indexed. So, the positional value of the last element
// in the array will be one fewer than the total number of elements.

// Because we added an element, 48, at index 5, it also created 2 elements at
// index positions 3 and 4 containing empty values. For now, let's have a look
// at array methods and find out the right way to add to an array

numbers = [12, 24, 36];
numbers[-1] = 0;
numbers[5] = 48;
console.log(numbers.length);

console.log("numbers", numbers);
// Array methods
// We have just seen the built-in length property. We also have a few built-in
// methods. Methods are functions on a certain object. Instead of holding a
// value, like properties, they perform actions. We will cover functions indepth in Chapter 6, Functions. For now, all you need to know is that you
// can call methods and functions, and when you do, some code that is
// specified inside that function gets executed.
// We just accidentally saw we could add elements using new indices. This is
// not the proper way to do it as it is easy to make mistakes and accidentally
// overwrite a certain value or skip a certain index. The right way is to do this
// with a special method. Similarly, we can also delete elements and sort the
// elements in the array.

// Adding and replacing elements
// We can add elements with the push() method from end:

favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");
// The value gets added to the end of the array. The push method returns the
// new length of the array, four in this case.

// We can add elements with the unshift() method from start:

// arr8.unshift();
// console.log(arr8);

let lengthOfFavoriteFruits = favoriteFruits.push("lime");
console.log(lengthOfFavoriteFruits);
console.log(favoriteFruits);

// This was easy right? But what if you would want to add elements at a
// certain index? You can use the splice() method. This one is slightly more
// difficult:

let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
arrOfShapes.splice(2, 0, "square", "trapezoid");
console.log(arrOfShapes);

// As you can see, the square and trapezoid get inserted on index 2. The rest of
// the array is shifting to the right. The splice() method takes multiple
// parameters. The first parameter, 2 in our case, is the index of the array on
// which we want to start inserting. The second parameter, 0 in our case, is the
// number of elements we want to delete starting at our previously defined
// starting index. The parameters after these first two, square and trapezoid
// in our case, are whatever should be inserted starting at the start index.

// So, had we said this instead:
// arrOfShapes.splice(2, 2, "square", "trapezoid");
// console.log(arrOfShapes);
// ["circle", "triangle", "square", "trapezoid"];

// If you were to increase the second parameter to a number higher than our
// array, it would not affect the result as JavaScript would simply stop as soon
// as it runs out of values to delete. Try the following code:
// arrOfShapes.splice(2, 12, "square", "trapezoid");
// console.log(arrOfShapes);

// You can also add another array to your array. This can be done with the
// concat() method. This way, you can create a new array that consists of a
// concatenation of both arrays. The elements of the first array will be first,
// and the elements of the argument of concat() will be concatenated to the
// end:

let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);

let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

// Deleting elements

// There are several ways in which you can delete elements from an array.
// Removing the last element is done with pop() :

arr8.pop();
console.log(arr8);

// Deleting the first element can be done with shift() . This causes all other
// indices to be reduced by one:

arr8.shift();
console.log(arr8);

// Remember splice() ? This is a very special method because we can also
// use it to delete values. We specify the index from where we want to start
// deleting, and then the number of elements we want to delete.

arr8.splice(1, 3);
console.log(arr8);

// If you do not wish to change
// any of the later indices, you can also use the operator delete. This is not a
// method, but you can use it to change the value of a certain position of the
// array to undefined:

delete arr8[0];
console.log(arr8);

// Finding elements

// you want to know what
// position it is on. This can be done with the indexOf() method. This
// method returns the index on which the value is found. If a value occurs in
// an array more than once, it will return the first occurrence. If the value is
// not found, it will return -1 :

let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
// If you want to find the next occurrence of the specified number, you can
// add a second argument to indexOf() , specifying from which position it
// should start searching:

let findIndex3 = arr8.indexOf(6, 2);
console.log(findIndex, findIndex2, findIndex3);

// The last occurrence can also be found. This is done with the
// lastIndexOf() method:

let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog);
// The value of lastDog will be 4 because that is the last occurrence of dog
// in the array.

// Sorting
// There is also a built-in method for sorting arrays. It sorts numbers from
// small to high and strings A-Z. You can call sort() on an array and the
// order of the values of the array will change to a sorted order:

let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
// As you can see, the array is now sorted alphabetically. For numbers, it is
// sorting them in ascending order, as you can see in the following code
// snippet:

let ages = [18, 72, 33, 56, 40];
ages.sort();

console.log(names);
console.log(ages);

// Reversing
// The elements of the array can be reversed by calling the built-in method,
// reverse() , on an array. It puts the last element first, and the first element
// last. It does not matter whether the array is sorted or not; it just reverses the
// order.

names.reverse();
console.log(names);

console.log(typeof arr1);

// Multidimensional arrays
// Earlier, we established already that arrays can contain any data type. This
// means that arrays can also contain other arrays (which, in turn, can
// contain… other arrays!). This is called a multidimensional array. It sounds
// complicated, but it is just an array of arrays: a list of lists:
// let someValues1 = [1, 2, 3];
// let someValues2 = [4, 5, 6];
// let someValues3 = [7, 8, 9];
// let arrOfArrays = [someValues1, someValues2, someValues3];
// So, we can create an array of already existing arrays. This is called a twodimensional array. We can write it like this:
// let arrOfArrays2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// If you want to access elements of the inner arrays, you will have to specify
// an index twice:
// let value1 = arrOfArrays[0][1];
// The statement will grab the first array because it has an index position of
// 0 . From this first array, it will take the second value, because it has an
// index position of 1 . Then it stores this value in value1 . That means the
// value of value1 will be 2. Can you figure out what the value of the next
// one will be?
// let value2 = arrOfArrays[2][2];

// arrOfArraysOfArrays = [arrOfArrays, arrOfArrays, arrOfArrays];
// This is what the array looks like in terms of values:
// [
//  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
//  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ],
//  [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// ]

// Let's get the middle element of this array, which is the value 5, belonging to
// the second array of arrays. It is done like this:
// let middleValue = arrOfArraysOfArrays[1][1][1];
// The first step is to get the second array of arrays, so index 1. Then we need
// to get the second array of this one, which again is index 1. Now we reach
// the level of the values, and we need the second value, so again we use index
// 1. This is useful in many situations, for example, when you want to work
// with matrices.

// If you want to check whether a value is present in an array, you can use the
// find() method. What will go in the find() method is somewhat different.
// It is actually a function. This function will be executed on every element in
// the array until it finds a match, and if it does not, then it will return
// undefined.
// Do not worry if this is too difficult for now; it will become clear soon
// enough. We are writing the function in two different ways in the following
// code snippet. They are actually doing the same, except that the first one is
// checking for an element being equal to 6, and the second for an element
// being equal to 10:
// arr8 = [ 2, 6, 7, 8 ];
// let findValue = arr8.find(function(e) { return e === 6});
// let findValue2 = arr8.find(e => e === 10);
// console.log(findValue, findValue2);
// The log statement will log 6 and undefined because it can find an element
// that matches for 6 , but not one that matches for 10 .
// A function can take a certain input. In this case, it takes the element of the
// array as an input. When the element of the array equals 6 ( findValue ) or
// 10 ( findValue2 ), it returns the element. In Chapter 6, Functions, we will
// cover functions in much more detail. It is a lot for a beginner to take in, so
// you can review this a bit later if it is unclear for now.
