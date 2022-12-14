// Anonymous functions
// So far, we have been naming our functions. We can also create functions
// without names if we store them inside variables. We call these functions
// anonymous. Here is a non-anonymous function:
function doingStuffAnonymously() {
  console.log("Not so secret though.");
}
// Here is how to turn the previous function into an anonymous function:
// function() {
//  console.log("Not so secret though.");
// };
// As you can see, our function has no name. It is anonymous. So you may
// wonder how you can invoke this function. Well actually, you can't like this!
// We will have to store it in a variable in order to call the anonymous
// function; we can store it like this:

let functionVariable = function () {
  console.log("Not so secret though.");
};

functionVariable();
// This might seem a bit useless, but it is a very powerful JavaScript construct.
// Storing functions inside variables enables us to do very cool things, like
// passing in functions as parameters. This concept adds another abstract layer
// to coding. This concept is called callbacks, and we will discuss it in the next
// section.

function doFlexibleStuff(executeStuff) {
  executeStuff();
  console.log("Inside doFlexibleStuffFunction.");
}

doFlexibleStuff(functionVariable);

let anotherFunctionVariable = function () {
  console.log("Another anonymous function implementation.");
};

doFlexibleStuff(anotherFunctionVariable);

// At this point you may wonder why the writers are so excited about this
// callback concept. It probably looks rather lame in the examples you have
// seen so far. Once we get to asynchronous functions later on, this concept is
// going to be of great help. To still satisfy your need for a more concrete
// example, we will give you one.

// Just as with loops, if statements, and actually all other building blocks, we
// can have functions inside functions. This phenomenon is called nested
// functions:
// This will output:
// Outer function
// 9
// I can access outer variables: 2

// As you can see, the outer function is calling its nested function. This nested
// function has access to the variables of the parent. The other way around,
// this is not the case. Variables defined inside the inner function have function
// scope. This means they are accessible inside the function where they are
// defined, which is in this case the inner function. Thus, this will throw a
// ReferenceError :

function doOuterFunctionStuff(nr) {
  console.log("Outer function");
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    console.log(x + 7);
    console.log("I can access outer variables:", nr);
  }
}

doOuterFunctionStuff(2);

function doOuterFunctionStuff(nr) {
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    let z = 10;
  }
  console.log("Not accessible:", z);
}

doOuterFunctionStuff(2);

function doOuterFunctionStuff(nr) {
  doInnerFunctionStuff(nr);
  function doInnerFunctionStuff(x) {
    let z = 10;
  }
}

// doInnerFunctionStuff(3);

// This will also throw a ReferenceError . Now, doInnerFunctionStuff() is
// defined inside the outer function, which means that it is only in scope inside
// doOuterFunctionStuff() . Outside this function, it is out of scope

// In JavaScript, there are many built-in functions, as you may know by now.
// One of them is the setTimeout() function. It is a very special function that
// is executing a certain function after a specified amount of time that it will
// wait first. It is also seemingly responsible for quite a few terribly
// performing web pages, but that is definitely not the fault of this poor
// misunderstood and misused function.
// This code is really something you should try to understand:
let youGotThis = function () {
  console.log("You're doing really well, keep coding!");
};

setTimeout(youGotThis, 1000);
setInterval(youGotThis, 1000);
