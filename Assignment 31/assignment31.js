"use strict";
// Current users and new users lists
let current_users = ["Abrar", "Bilal", "Maaz", "Khan", "Asim"];
let new_users = ["Arslan", "Javeria", "Asad", "Imran", "Abrar"];
// Loop through the new_users list
for (const newUsername of new_users) {
    // Check if the new username exists in current_users (case-insensitive)
    const isUsernameTaken = current_users.some((currentUsername) => currentUsername.toLowerCase() === newUsername.toLowerCase());
    if (isUsernameTaken) {
        console.log(`Username "${newUsername}" is not available. Please choose a different username.`);
    }
    else {
        console.log(`Username "${newUsername}" is available.`);
    }
}
