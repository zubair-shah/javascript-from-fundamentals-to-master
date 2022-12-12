// for of loop
// There is another loop we can use to iterate over the elements of an array:
// the for of loop. It cannot be used to change the value associated with the
// index as we can do with the regular loop, but for processing values it is a
// very nice and readable loop

for (let name of names) {
  console.log(name);
}

// for in loop
// Manipulating objects with loops can also be done with another variation of
// the for loop, the for in loop. The for in loop is somewhat similar to the
// for of loop. Again here, we need to specify a temporary name, also
// referred to as a key, to store each property name in. We can see it in action
// here:

let car = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};

for (let prop in car) {
  console.log(car[prop]);
}

for (let prop in car) {
  console.log(prop);
}

// Looping over objects by converting to an
// array

// You can use any loop on objects, as soon as you convert the object to an
// array. This can be done in three ways:
// Convert the keys of the object to an array
// Convert the values of the object to an array
// Convert the key-value entries to an array (containing arrays with two
// elements: object key and object value)

// If we want to loop over the keys of the object, we can use the for in loop,
// as we saw in the previous section, but we can also use the for of loop if
// we convert it to an array first. We do so by using the
// Object.keys(nameOfObject) built-in function. This takes an object and
// grabs all the properties of this object and converts them to an array.

let cars = {
  model: "Golf",
  make: "Volkswagen",
  year: 1999,
  color: "black",
};

let arrKeys = Object.keys(car);
console.log(arrKeys);

// We can loop over the properties of this array like this using the for of
// loop:
for (let key of Object.keys(car)) {
  console.log(key);
}

// Similarly, we can use the for of loop to loop over the values of the object
// by converting the values to an array. The main difference here is that we use
// Object.values(nameOfObject) :
for (let key of Object.values(car)) {
  console.log(key);
}

// As you can see, it is returning a two-dimensional array, containing keyvalue pairs. We can loop over it like this:
for (const [key, value] of Object.entries(car)) {
  console.log(key, ":", value);
}
