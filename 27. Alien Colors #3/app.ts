/* 
  Alien Colors #3: Turn your if-else chain from previod Exercise into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.
*/

// First version: Where align color is Green.

console.log(`1st version where align color is Green:`)

let alien_color: string = 'Green';

if (alien_color === 'Green') {
    console.log(`Congratulations! You just earned 5 points.`);
} else if (alien_color === 'Yellow') {
    console.log(`Congratulations! You just earned 10 points.`);
} else if (alien_color === 'Red') {
    console.log(`Congratulations! You just earned 15 points.`);
} else {
    console.log(`Unknown alien color.`);
}
 // Second version: Where align color is Yellow.

console.log(`2nd version where align color is Yellow:`)

alien_color = 'Yellow';

if (alien_color === 'Green') {
    console.log(`Congratulations! You just earned 5 points.`);
} else if (alien_color === 'Yellow') {
    console.log(`Congratulations! You just earned 10 points.`);
} else if (alien_color === 'Red') {
    console.log(`Congratulations! You just earned 15 points.`);
} else {
    console.log(`Unknown alien color.`);
}

// Third version: Where align color is Red.

console.log(`3rd version where align color is Red:`)

alien_color = 'Red';

if (alien_color === 'Green') {
    console.log(`Congratulations! You just earned 5 points.`);
} else if (alien_color === 'Yellow') {
    console.log(`Congratulations! You just earned 10 points.`);
} else if (alien_color === 'Red') {
    console.log(`Congratulations! You just earned 15 points.`);
} else {
    console.log(`Unknown alien color.`);
}