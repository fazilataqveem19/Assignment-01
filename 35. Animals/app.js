"use strict";
/*
  Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal.

 • Modify your program to print a statement about each animal, such as A dog would make a great pet.

 • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
*/
// List of Animals with common characteristics.
const animals = ['Dog', 'Cat', 'Cow'];
// Printing the names of each Animal using a for of loop.
console.log("List of Animals:");
for (const i of animals) {
    console.log(i);
}
// Print a message about each Animal.
console.log("\nStatements about each Animal:");
for (const i of animals) {
    if (i === 'Dog') {
        console.log(`A ${i} is a lovely pet.`);
    }
    else if (i === 'Cat') {
        console.log(`A ${i} would be a good companion at home.`);
    }
    else if (i === 'Cow') {
        console.log(`A ${i} is an adorable pet.`);
    }
}
// Commmon characteristics.
console.log("\nWhat these Animals have in common:");
console.log("Any of these Animals could be a great pet!");
