"use strict";
/*
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/
// Function to display a flower object.
function displayFlower(name, colour, fragrance) {
    return {
        name,
        colour,
        fragrance,
    };
}
// Create an array of flowers.
const flowers = [
    displayFlower("Red Rose", "Red", "Myrrh"),
    displayFlower("Jasmine", "Yellow", "Rich, sweet, fruity, and sensual"),
    displayFlower("Freesia", "White", "Minty fresh"),
];
// Access an invalid index.
const invalidIndex = 5;
// There are only 3 elements in the array, so this will cause an error.
console.log(`Flower at index ${invalidIndex}:`, flowers[invalidIndex]);
// Print the flowers.
flowers.forEach((flower) => {
    console.log(`Name: ${flower.name}, Colour: ${flower.colour}, Fragrance: ${flower.fragrance}`);
});
