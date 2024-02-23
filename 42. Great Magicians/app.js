"use strict";
/*
Great Magicinas: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
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
// Call the Function to show "The Great" Magician's names.
console.log("\nGreat Maagicians:");
show_magicians(great_magicians_names);
