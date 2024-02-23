"use strict";
/*
Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.

• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
*/
// Step # 1: Arrays
const current_users = ["John", "Carla", "Mike", "Jack", "Noah", "Ben"];
const new_users = ["john", "Sidney", "Myles", "CARLA", "Cirus", "BeN"];
// Step # 2: Function
function checkUserNames(current_users, new_users) {
    // First step of Function:
    const lowercasedCurrentUsers = current_users.map(user => user.toLowerCase());
    // Second step of Function:
    for (const newUser of new_users) {
        const lowercasedNewtUsers = newUser.toLowerCase();
        if (lowercasedCurrentUsers.includes(lowercasedNewtUsers)) {
            console.log(`Username "${newUser}" is already taken. Please enter a new username.`);
        }
        else {
            console.log(`Username "${newUser}" is available.`);
        }
    }
}
checkUserNames(current_users, new_users);
