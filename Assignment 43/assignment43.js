"use strict";
function make_sandwich(...items) {
    console.log("Making a sandwich with the following items:");
    for (const item of items) {
        console.log(`- ${item}`);
    }
    console.log("Enjoy your sandwich!");
}
// Call the function with different numbers of arguments
make_sandwich("Bread", "Ham", "Cheese", "Lettuce", "Tomato");
make_sandwich("Bread", "Peanut Butter", "Jelly");
make_sandwich("Bread", "Turkey", "Swiss Cheese");
