"use strict";
/*
Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in an array, and then use a for loop to print the name of each pizza.

• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.

• Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
*/
// Array of favorite Pizzas.
const favoritePizzas = ['Pepperoni', 'Fajita', 'Margherita'];
// Print the name of each Pizza using a for loop.
console.log("My favorite Pizzas are:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
// Print a sentence for each Pizza.
console.log("\nI like these Pizzas:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(`I like ${favoritePizzas[i]} Pizza.`);
}
// Print an additional sentence about how much I like Pizza.
console.log(`\n I really love Pizza!`);
