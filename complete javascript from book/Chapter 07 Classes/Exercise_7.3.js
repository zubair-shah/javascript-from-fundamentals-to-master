// class Animal {
//     constructor(species, sounds) {
//         this.species = species;
//         this.sounds = sounds;
//     }
//     speak() {
//         console.log(this.species + " " + this.sounds);
//     }
// }
// Animal.prototype.eat = function () {
//     return this.species + " is eating";
// }
// let cat = new Animal("cat", "meow");
// let dog = new Animal("dog", "bark");
// cat.speak();
// console.log(dog.eat());
// console.log(dog);

// my practice

class Animal {
  constructor(species, sounds) {
    this.species = species;
    this.sounds = sounds;
  }
  speak() {
    console.log(this.species + " sounds is " + this.sounds);
  }
}

Animal.prototype.dangerous = function () {
  return this.species + "is very dangerous";
};

let cat = new Animal("cat", "meow");
let dog = new Animal("dog", "bark");

cat.speak();
dog.speak();
console.log(dog.dangerous());
