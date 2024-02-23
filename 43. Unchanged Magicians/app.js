"use strict";
/*
Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/
const magician_names = ["Harry Porter", "Teller", "David Blaine", "Criss Angel"];
function show_magicians(magicians) {
    for (const i of magicians) {
        console.log(i);
    }
}
function make_great(magicians) {
    const great_magicians = magicians.map(i => `The Great ${i}`);
    return great_magicians;
}
// Modify the array to add "The Great" to each Magician's name.
const great_magicians_names = make_great(magician_names);
// Call the Function to show the original Magician's names.
console.log("Original Magicians:");
show_magicians(magician_names);
// Call the Function to show "The Great" Magician's names.
console.log("\nGreat Maagicians:");
show_magicians(great_magicians_names);
