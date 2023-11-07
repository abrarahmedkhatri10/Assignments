"use strict";
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
// Create an array of magician's names
const magicianNames = ["Harry Blackstone Jr.", "Ricky Jay", "Teller", "Dorothy Dietrich", "David Devant"];
// Call make_great() to modify the magician names
make_great(magicianNames);
// Call show_magicians() to see the modified list
show_magicians(magicianNames);
