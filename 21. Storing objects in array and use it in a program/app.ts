/* Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items. */


const iPhone = 
{
    name: "iPhone 15",
    price: "799 USD",
    description: "A line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system."
};

// Define an array of Objects.

let iPhones: Array<typeof iPhone> = [];

// Pushing multiple Objects.

iPhones.push(iPhone);
iPhones.push({
    name: "iPhone 12",
    price: "294 USD",
    description: "A line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system."
});

let iPhone3 = {
    name: "iPhone 8",
    price: "119 USD",
    description: "A line of smartphones produced by Apple Inc. that use Apple's own iOS mobile operating system."
};
iPhones.push(iPhone3);

// console.log(iPhones)

// Function to display iPhones.

function displayiPhones(iPhones: Array<typeof iPhone>)
{
for(let i of iPhones)
{
console.log(`
tittle: ${i.name}
price: ${i.price}
description: ${i.description}
________________\n`);
}
}

displayiPhones(iPhones);
