"use strict";
/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/
// Define the array of fruits.
const favorite_fruits = ["Strawberry", "Cherry", "Orange"];
// Check for specific fruits using five if statements.
if (favorite_fruits.includes("Strawberry")) {
    console.log("I like Strawberries!");
}
if (favorite_fruits.includes("Cherry")) {
    console.log("I enjoy Cherries!");
}
if (favorite_fruits.includes("Orange")) {
    console.log("I really like Oranges!");
}
if (favorite_fruits.includes("Banana")) {
    console.log("Bananas are delicious!");
}
if (favorite_fruits.includes("Peach")) {
    console.log("Peaches are my favorite!");
}
