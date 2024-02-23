"use strict";
/*
Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

 • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

 • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

 • Print a second set of invitation messages, one for each person who is still in your list.
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
