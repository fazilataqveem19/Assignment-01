"use strict";
/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/
function create_car(Manufacturer, Model, ...Properties) {
    const car = {
        Manufacturer,
        Model,
    };
    for (const [key, value] of Properties) {
        car[key] = value;
    }
    return car;
}
// Examples:
const my_car = create_car("Toyota", "Corolla", ["Color", "Black"], ["Optional Feature", "Sunroof"], ["Speed", "280 km/hour"]);
console.log(my_car);
