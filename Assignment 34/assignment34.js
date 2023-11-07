"use strict";
let animals = ["dog", "cat", "rabbit"];
for (const animal of animals) {
    console.log(animal);
}
for (const animal of animals) {
    if (animal === "dog") {
        console.log(`A ${animal} would make a great pet.`);
    }
    else if (animal === "cat") {
        console.log(`A ${animal} is an independent and popular pet choice.`);
    }
    else if (animal === "rabbit") {
        console.log(`A ${animal} can be a cute and low-maintenance pet.`);
    }
}
console.log("Any of these animals would make a great pet!");
