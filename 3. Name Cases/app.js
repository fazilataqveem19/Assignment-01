"use strict";
/* Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase. */
let personName = "Fazila Taqveem";
// Step # 1 Show in lower case:
let lowercaseName = personName.toLowerCase();
console.log(lowercaseName);
// Step # 2 Show in upper case:
let uppercaseName = personName.toUpperCase();
console.log(uppercaseName);
// Step # 3 Show in title case:
let words = personName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
