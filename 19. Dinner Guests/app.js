"use strict";
/*
Working with one of the programs from Exercises 15 through 18, print a message indicating the number of people you are inviting to dinner.
*/
let guestList = ["Elon Musk", "Sherlock Holmes", "Bill Gates"];
// Step # 1: Print the name of a guest who can't make it.
let guestWhoCantMakeIt = "Sherlock Holmes";
console.log(`${guestWhoCantMakeIt} can't make it to Dinner.`);
// Step # 2: Replace the name of a guest who can't make it.
let newGuest = "Mark Zuckerberge";
let indexOfguestWhoCantMakeIt = guestList.indexOf(guestWhoCantMakeIt);
if (indexOfguestWhoCantMakeIt !== -1) {
    guestList[indexOfguestWhoCantMakeIt] = newGuest;
}
;
// Step # 3: Print a second set of invitation messages.
console.log("Second set of invitation messages:");
guestList.forEach((guest) => { console.log(`Dear ${guest}, You are invited to Dinner.`); });
// Print a message indicating the number of guest.
console.log("\nPrinting message indicating number of guest:");
console.log(`We had finally invited ${guestList.length} guest in Excerise # 15.`);
