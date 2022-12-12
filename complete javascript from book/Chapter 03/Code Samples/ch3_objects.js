// Objects in JavaScript
// Now it is time to have a look at another complex data structure that can
// contain more than one value: objects! Objects are very useful and can be
// used to describe real-life objects as well as more complex abstract concepts
// that allow for more flexibility in your code
// Secretly, you have just been introduced to objects already, because arrays
// are a very special type of object. Arrays are objects with indexed properties.
// All the other objects, and also the objects we will see here, are objects with
// named properties. This means that instead of an automatically generated
// index number, we will give it a custom descriptive name.

// Objects are not too dissimilar to real-world objects. They have properties
// and they can perform actions, methods. Here, we will only deal with the
// properties. We will cover methods in Chapter 7, Classes, after we have seen
// functions. An object is a chance to group multiple variables into one. This is
// done with curly brackets: { and } . Let's have a look at this object of a dog
// here:

let dog = {
  dogName: "JavaScript",
  weight: 2.4,
  color: "brown",
  breed: "chihuahua",
  age: 3,
  burglarBiter: true,
};
// We created a variable, dog , and we gave this an object as a value. We can
// recognize that this is an object by seeing the { and }. In between the curly
// braces, we see a bunch of properties and their values.
// If you have ever wondered whether something should be a property, just try
// the following template sentence in your head:
// *objectname* has a(n) *property name*

// For example, a dog has a name, a dog has a color, and a dog has a weight.
// This is slightly different for the Boolean properties, for which you can use
// "is" or "is not" instead of "has".
// We can access the properties of this object in a very similar way as we
// would with the array. This time, we are not using the index number, but the
// name of the property, to get the value:

let dogColor1 = dog["color"];
let dogColor2 = dog.color;

// There is another way to do this. Instead of the square brackets, the property
// name can also be added to the object name with a dot in between:
// let dogColor2 = dog.color;

// Updating objects
// We can change the value of the properties of the objects. Again, this is
// similar to an array because an array is an object as well, but for properties,
// we have two options:

dog["color"] = "blue";
dog.weight = 2.3;

// // Objects in objects;
// Let's say we want to have an object for a company. This company will have
// an address. And an address is another object. If we give our company an
// address, we are using an object inside an object:

let company = {
  companyName: "Healthy Candy",
  activity: "food manufacturing",
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  yearOfEstablishment: 2021,
};
// To access or modify one of the properties of the address here, we can use
// two approaches:

company.address.zipcode = "33117";
company["address"]["number"] = "100";

console.log(company);

// Arrays in objects
// Our company might have a range of activities instead of one. We can
// simply replace the activity from our previous sample with an array

let company2 = {
  companyName: "Healthy Candy",
  activities: [
    "food manufacturing",
    "improving kids' health",
    "manufacturing toys",
  ],
  address: {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  yearOfEstablishment: 2021,
};
// Here, we call the object we're interested in, company , then the relevant
// array, activities , with reference to the index position of the variable
// we're looking for within the array, which is 1 .
let activity = company2.activities[1];
console.log(activity);

// It is very possible that instead of one address, our company has a list of
// addresses. We can accomplish this by creating an array of address objects.
// In this case, we will create an array of two:

let addresses = [
  {
    street: "2nd street",
    number: "123",
    zipcode: "33116",
    city: "Miami",
    state: "Florida",
  },
  {
    street: "1st West avenue",
    number: "5",
    zipcode: "75001",
    city: "Addison",
    state: "Texas",
  },
];

// Objects in arrays in objects;
// Just to show that this can go as many levels as we would need, we are going
// to give our company object an array of address objects. So, let's add this
// array of address objects to our company object. This way, our company has
// an array of addresses:

let company3 = {
  companyName: "Healthy Candy",
  activities: [
    "food manufacturing",
    "improving kids' health",
    "manufacturing toys",
  ],
  address: [
    {
      street: "2nd street",
      number: "123",
      zipcode: "33116",
      city: "Miami",
      state: "Florida",
    },
    {
      street: "1st West avenue",
      number: "5",
      zipcode: "75001",
      city: "Addison",
      state: "Texas",
    },
  ],
  yearOfEstablishment: 2021,
};
// To access elements of increasingly nested objects and arrays, we simply
// extend the same logic you have seen in the previous sections. To access the
// street name of Healthy Candy's first address, we can use the following code:
// let streetName = company.address[0].street;
