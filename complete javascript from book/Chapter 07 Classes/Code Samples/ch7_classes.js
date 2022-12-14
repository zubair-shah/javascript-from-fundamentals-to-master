// Classes
// In this chapter, we are going to discuss JavaScript classes. We have seen
// JavaScript objects already, and classes are a blueprint or template for object
// creation. So, many of the things discussed here should not sound too
// unfamiliar or revolutionary.

// Classes enable object-oriented programming, which was one of the most
// important design advancements in software development. This development
// reduced the complexity of applications and increased maintainability by a
// huge margin.
// So, object-oriented programming and classes are of great importance for
// computer science in general. This is not necessarily the case when we apply
// it to JavaScript though. JavaScript classes are something special compared
// to other programming languages. Beneath the surface, classes are wrapped
// in some sort of special function. This means that they are actually an
// alternative syntax for defining objects using a constructor function. In this
// chapter, we will learn what classes are and how we can create and use them.
// Along the way, we will cover the following topics:

// Object-oriented programming
// Classes and objects
// Classes
// Inheritance
// Prototypes

// Classes in JavaScript encapsulate data and functions that are part of that
// class. If you create a class, you can later create objects using that class
// using the following syntax:
// class ClassName {
//  constructor(prop1, prop2) {
//  this.prop1 = prop1;
//  this.prop2 = prop2;
//  }
// }
// let obj = new ClassName("arg1", "arg2");

// Remember we said that classes are just some special function beneath the
// surface. We could create the object with a special function like this:

class Dog {
  constructor(dogName, weight, color, breed) {
    this.dogName = dogName;
    this.weight = weight;
    this.color = color;
    this.breed = breed;
  }
}

let dog = new Dog("JavaScript", 2.4, "brown", "chihuahua");
console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.weight, "kg.");
// This results in an object with the same properties. If we do some logging as
// follows, we will be able to see it:
// This will output:
// JavaScript is a chihuahua and weighs 2.4 kg.

// Classes;
// You may wonder, if classes do the exact same thing as simply defining an
// object, why do we even need classes? The answer is that classes are
// essentially blueprints for object creation. This means that we need to do
// much less typing if we need to create 20 dogs when we have a dog class. If
// we have to create the objects, we will have to specify all the properties'
// console.log(dog.dogName, "is a", dog.breed, "and weighs", dog.we
// names each time. And it would be easy to make a typo and misspell a
// property name. Classes come in handy in these sorts of situations.
// As shown in the previous section, we use the class keyword to tell
// JavaScript we want to create a class. Next, we give the class a name. It is
// the convention to start class names with a capital letter.
// Let's have a look at all the different elements of a class

// Constructors
// The constructor method is a special method that we use to initialize
// objects with our class blueprint. There can only be one constructor in a
// class. This constructor contains properties that will be set when initiating
// the class.
// Here you can see an example of a constructor in a Person class:

// class Person {
//   constructor(firstname, lastname) {
//     this.firstname = firstname;
//     this.lastname = lastname;
//   }
// }
class Machine {
  constructor(title, model, price, warranty) {
    this.title = title;
    this.model = model;
    this.price = price;
    this.warranty = warranty;
  }
}
let m1 = new Machine("computer", 2009, "$300", "2 years");
console.log(m1.title, m1.model, m1.price, m1.warranty);
// Here is how you can create a new object from the Person class:
// let p = new Person("Maaike", "van Putten");
// The new word is what tells JavaScript to look for the special constructor
// function in the Person class and create a new object. The constructor gets
// called and returns an instance of the person object with the specified
// properties. This object gets stored in the p variable.

// let p1 = new Person("Maaike", "van Putten");
// console.log("Hi", p1.firstname);

// What do you think will happen when we create a class without all of the
// properties? Let's find out:

let p2 = new Person("Maaike");
console.log("Hi", p2.firstname, p2.lastname);

// Many languages would crash, but not JavaScript. It just sets the remaining
// properties to undefined . You can see what happens by logging it:
// console.log("Hi", p.firstname, p.lastname);
// This results in:
// Hi Maaike undefined

// Methods
// In a class, we can specify functions. This means that our object can start
// doing things using the object's own properties—for example, printing a
// name. Functions on a class are called methods. When defining these
// methods, we don't use the function keyword. We start directly with the
// name:

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log("Hi there!");
  }
  //   We can call the greet method on a Person object like this:
  // let p = new Person("Maaike", "van Putten");
  // p.greet();
  // It will output:
  // Hi there! I'm Maaike

  // Just like functions, methods can also take parameters and return results:

  compliment(name, object) {
    return "That's a wonderful " + object + ", " + name;
  }
}

p.greet();

let compliment = p.compliment();
console.log(compliment);
// The output will be:
// That's a wonderful hat, Harry
// how to add properties that aren't accessible from outside. We prefix
// them with a # symbol:
class Person {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }
}
// Right now, the firstname and lastname properties cannot be accessed
// from outside the class. This is done by adding # in front of the property. If
// we try it:how to add properties that aren't accessible from outside. We prefix
// them with a # symbol:
// class Person {
//  #firstname;
//  #lastname;
//  constructor(firstname, lastname) {
//  this.#firstname = firstname;
//  this.#lastname = lastname;
//  }
// }
// Right now, the firstname and lastname properties cannot be accessed
// from outside the class. This is done by adding # in front of the property. If
// we try it:
// let p = new Person("Maria", "Saga");
// console.log(p.firstname);
// We'll get:
// undefined

// If we wanted to make sure we could only create objects with names starting
// with an "M," we could modify our constructor a bit:
// constructor(firstname, lastname) {
//  if(firstname.startsWith("M")){
//  this.#firstname = firstname;
//  } else {
//  this.#firstname = "M" + firstname;
//  }
//  this.#lastname = lastname;
//  }
// Now when you try to create a person that has a firstname value that
// doesn't start with an "M," it will add an M in front. So for example, the
// value of the following first name is Mkay :
// let p = new Person("kay", "Moon");
// This is a very silly example of validation. At this point, we cannot access it
// from outside the class at all after the constructor. We can only access it from
// inside the class. This is where getters and setters come into play.

// Getters and setters
// Getters and setters are special properties that we can use to get data from a
// class and to set data fields on the class. Getters and setters are computed
// properties. So, they are more like properties than they are like functions. We
// call them accessors. They do look a bit like functions, because they have
// () behind them, but they are not!
// These accessors start with the get and set keywords. It is considered
// good practice to make fields private as much as possible and provide access
// to them using getters and setters. This way, the properties cannot be set
// from outside without the object itself being in control. This principle is
// called encapsulation. The class encapsulates the data, and the object is in
// control of its own fields.

class Person {
  #firstname;
  #lastname;
  constructor(firstname, lastname) {
    this.#firstname = firstname;
    this.#lastname = lastname;
  }

  get firstname() {
    return this.#firstname;
  }

  set firstname(firstname) {
    this.#firstname = firstname;
  }

  get lastname() {
    return this.#lastname;
  }

  set lastname(lastname) {
    this.#lastname = lastname;
  }
}

// The getter is used to get the property. Therefore, it doesn't take any
// parameters, but simply returns the property. The setter is the other way
// around: it takes a parameter, assigns this new value to the property, and
// returns nothing. The setter can contain more logic, for example, some
// validation, as we'll see below. The getter can be used outside the object as if
// it were a property. The properties are no longer directly accessible from
// outside the class, but can be accessed via the getter to get the value and via
// the setter to update the value. Here is how to use it outside the class
// instance

let p1 = new Person("Maria", "Saga");
console.log(p1.firstname);
// This will output:
// Maria

// We have created a new Person object with a first name of Maria and last
// name of Saga . The output is showing the first name, which is only possible
// because we have a getter accessor. We can also set the value to something
// else, because there is a setter. Here is how to update the first name, so the
// name is no longer Maria , but Adnane .
// p.firstname = "Adnane";

// We could do a
// similar validation as in the constructor before, like this:
// set firstname(firstname) {
//  if(firstname.startsWith("M")){
//  this.#firstname = firstname;
//  } else {
//  this.#firstname = "M" + firstname;
//  }
//  }
// This will check whether firstname starts with an M , and if it does it will
// update the value to whatever the firstname parameter is. If it doesn't, it
// will concatenate an M in front of the parameter.
// Please note that we do not access firstname as if it was a function. If you
// put two parentheses () after it, you would actually get an error telling you
// that it is not a function.

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }

  greet() {
    console.log("Hi there!");
  }
}

Person.prototype.introduce = function () {
  console.log("Hi, I'm", this.firstname);
};

let p = new Person("Maria", "Saga");
p.introduce();

// Inheritance
// Inheritance is one of the key concepts of OOP. It is the concept that classes
// can have child classes that inherit the properties and methods from the
// parent class. For example, if you needed all sorts of vehicle objects in your
// application, you could specify a class named Vehicle in which you specify
// some shared properties and methods of vehicles. You would then go ahead
// and create the specific child classes based on this Vehicle class, for
// example, boat , car , bicycle , and motorcycle .
// This could be a very simple version of the Vehicle class:

class Vehicle {
  constructor(color, currentSpeed, maxSpeed) {
    this.color = color;
    this.currentSpeed = currentSpeed;
    this.maxSpeed = maxSpeed;
  }

  move() {
    console.log("moving at", this.currentSpeed);
  }

  accelerate(amount) {
    this.currentSpeed += amount;
  }
}

// this could be a Motorcyle class inheriting from this class using the
// extends keyword:

// With the extends keyword we specify that a certain class is the child of
// another class. In this case, Motorcycle is a child class of Vehicle . This
// means that we'll have access to properties and methods from Vehicle in
// our Motorcycle class. We have added a special doWheelie() method. This
// is not something that makes sense to add to the Vehicle class, because this
// is an action that is specific to certain vehicles.

class Motor extends Vehicle {
  constructor(color, currentSpeed, maxSpeed, fuel) {
    super(color, currentSpeed, maxSpeed);
    this.fuel = fuel;
  }
}
// The super word in the constructor is calling the constructor from the
// parent, the Vehicle constructor in this case. This makes sure that the fields
// from the parent are set as well and that the methods are available without
// having to do anything else: they are automatically inherited. Calling
// super() is not optional, you must do it when you are in a class that is
// inheriting from another class, else you will get a ReferenceError .
// Because we have access to the fields of Vehicle in Motorcycle , this will
// work:

let motor = new Motor("Black", 0, 250, "gasoline");
console.log(motor.color);
motor.accelerate(50);
motor.move();

// And this is what it will output:
// Black
// moving at 50

// Prototypes
// A prototype is the mechanism in JavaScript that makes it possible to have
// objects. When nothing is specified when creating a class, the objects inherit
// from the Object.prototype prototype. This is a rather complex built-in
// JavaScript class that we can use. We don't need to look at how this is
// implemented in JavaScript, as we can consider it the base object that is
// always on top of the inheritance tree and therefore always present in our
// objects.

// There is a prototype property available on all classes, and it is always
// named "prototype." We can access it like this:
// ClassName.prototype
// Let's give an example of how to add a function to a class using the
// prototype property. In order to do so, we'll be using this Person class:

class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    console.log("Hi there!");
  }
}

// And here is how to add a function to this class using prototype :
// Person.prototype.introduce = function () {
//  console.log("Hi, I'm", this.firstname);
// };
