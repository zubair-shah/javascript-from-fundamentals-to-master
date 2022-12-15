// for loops are special loops. The syntax might be a little bit confusing at
// first, but you will find yourself using them soon, because they are very
// useful

// 1. Initialize the variables.
// 2. Check the condition.
// 3. If the condition is true, execute the code block. If the condition is false,
// the loop will end here.
// 4. Perform the statement (the third part, for example, i++ ).
// 5. Go back to step 2.

// It starts by creating a variable, i , and sets this to 0 . Then it checks
// whether i is smaller than 10. If it is, it will execute the log statement. After
// this, it will execute i++ and increase i by one.

for (let i = 0; i < 10; i++) {
  console.log(i);
}

// We can also use a for loop to create a sequence and add values to an array,
// like this:
let arr = [];
for (let i = 0; i < 100; i++) {
  arr.push(i);
}

// Most commonly, you will see i++ as the third part of the for loop, but
// please note that you can write any statement there. In this case, we are using
// i = i + 2 to add 2 to the previous value every time, creating an array with
// only even numbers.

let arr1 = [];
for (let i = 0; i < 100; i = i + 2) {
  arr1.push(i);
}
// Nested loops
// Sometimes it can be necessary to use a loop inside a loop. A loop inside a
// loop is called a nested loop. Often it is not the best solution to the problem.
// It could even be a sign of poorly written code (sometimes called "code
// smell" among programmers)
let arrOfArrays = [];
for (let i = 0; i < 3; i++) {
  arrOfArrays.push([]);
  for (let j = 0; j < 7; j++) {
    arrOfArrays[i].push(j);
  }
}

console.log(arrOfArrays);

let names = ["chantal", "john", "maxime", "bobbi", "jair"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

//let names = ["chantal", "john", "maxime", "bobbi", "jair"];
for (let i = 0; i < names.length; i++) {
  names[i] = "hello " + names[i];
}
console.log(names);
