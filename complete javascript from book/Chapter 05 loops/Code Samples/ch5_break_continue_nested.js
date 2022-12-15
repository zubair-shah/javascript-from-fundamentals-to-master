// break and continue
// break and continue are two keywords that we can use to control the flow
// of execution of the loop. break will stop the loop and move on to the code
// below the loop. continue will stop the current iteration and move back to
// the top of the loop, checking the condition (or in the case of a for loop,
// performing the statement and then checking the condition).

// break
// We have already seen break in the switch statement. When break was
// executed, the switch statement ended. This is not very different when it
// comes to loops: when the break statement is executed, the loop will end,
// even when the condition is still true.

for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 4) {
    break;
  }
}
// It looks like a loop that will log the numbers 0 to 10 (again excluding 10) to
// the console. There is a catch here though: as soon as i equals 4 , we
// execute the break command. break ends the loop immediately, so no
// more loop code gets executed afterward.

let cars = [
  {
    model: "Golf",
    make: "Volkswagen",
    year: 1999,
    color: "black",
  },
  {
    model: "Picanto",
    make: "Kia",
    year: 2020,
    color: "red",
  },
  {
    model: "Peugeot",
    make: "208",
    year: 2021,
    color: "black",
  },
  {
    model: "Fiat",
    make: "Punto",
    year: 2020,
    color: "black",
  },
];

// As soon as we run into a car with the year 2020 or later and the car is black,
// we will stop looking for other cars and just buy that one. The last car in the
// array would also have been an option, but we did not even consider it
// because we found one already
for (let i = 0; i < cars.length; i++) {
  if (cars[i].year >= 2020) {
    if (cars[i].color === "black") {
      console.log("I have found my new car and can stop looking:", car[i]);
      break;
    }
  }
}

// However, often it is not a best practice to use break . If you can manage to
// work with the condition of the loop to break out of the loop instead, this is a
// much better practice. It prevents you getting stuck in an infinite loop, and
// the code is easier to read.
// If the condition of the loop is not an actual condition, but pretty much a runforever kind of statement, the code gets hard to read.
let superLongArray = [];
while (true) {
  if (superLongArray[0] != 42 && superLongArray.length > 0) {
    superLongArray.shift();
  } else {
    console.log("Found 42!");
    break;
  }
}
// This would be better to write without break and without something terrible
// like while(true) ; you could do it like this:
let notFound = true;
while (superLongArray.length > 0 && notFound) {
  if (superLongArray[0] != 42) {
    superLongArray.shift();
  } else {
    console.log("Found 42!");
    notFound = false;
  }
}
// continue
// break can be used to quit the loop, and continue can be used to move on
// to the next iteration of the loop. It quits the current iteration and moves back
// up to check the condition and start a new iteration.

for (let car of cars) {
  if (car.color !== "black") {
    continue;
  }
  if (car.year >= 2020) {
    console.log("sure, let's get this one:", car);
  }
}

// The approach here is to just skip every car that is not black and consider all
// the others that are not older than make year 2020 or later.

// let's only log the odd numbers to the console
// let i = 1;
while (i < 50) {
  if (i % 2 === 0) {
    continue;
  }
  console.log(i);
  i++;
}

let i = 1;
while (i < 50) {
  i++;
  if ((i - 1) % 2 === 0) {
    continue;
  }
  console.log(i - 1);
}

for (let i = 1; i < 50; i = i + 2) {
  console.log(i);
}

let groups = [
  ["martin", "daniel", "keith"],
  ["margot", "marina", "ali"],
  ["helen", "jonah", "sambikos"],
];

//let's find a group with two names starting with an m
for (let i = 0; i < groups.length; i++) {
  let matches = 0;

  for (let j = 0; j < groups[i].length; j++) {
    if (groups[i][j].startsWith("m")) {
      matches++;
    } else {
      continue;
    }
    if (matches === 2) {
      console.log("Found a group with two names starting with an m:");
      console.log(groups[i]);
      break;
    }
  }
}

for (let group of groups) {
  for (let member of group) {
    if (member.startsWith("m")) {
      console.log("found one starting with m:", member);
      break;
    }
  }
}

outer: for (let group of groups) {
  inner: for (let member of group) {
    if (member.startsWith("m")) {
      console.log("found one starting with m:", member);
      break outer;
    }
  }
}
