"use strict";
/*
  More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
// Tests for equality and inequality with strings.
const str1 = "Hello";
const str2 = "hello";
console.log(str1 === str2); // False
console.log(str1 !== str2); // True
// Tests using the lower case function.
const text1 = "Hello, World!";
const text2 = "hello, world!";
console.log(text1 === text2); // False
console.log(text1.toLowerCase() === text2); // True
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to.
const num1 = 12;
const num2 = 6;
console.log(num1 === num2); // False
console.log(num1 !== num2); // True
console.log(num1 < num2); // False
console.log(num1 > num2); // True
console.log(num1 <= num2); // False
console.log(num1 >= num2); // True
// Tests using "and" and "or" operators.
const x = 6;
const y = 12;
const z = 16;
console.log(x < y && y < z); // True , both conditions are true
console.log(x < y || y > z); // True, at least one condition is true
console.log(x > y && y < z); // False, both conditions are flase
console.log(x > y || y > z); // False, both conditions are false
// Test whether an item is in an array. 
const flowers = ["Rose", "Freesia", "Jasmine", "Sunflower"];
console.log(flowers.includes("Jasmine")); // True
console.log(flowers.includes("Daisy")); // False
// Test whether an item is not in an array.
const colours = ["Blue", "Orange", "Pink", "Purple"];
console.log(!colours.includes("Black")); // True
console.log(!colours.includes("Pink")); // False
