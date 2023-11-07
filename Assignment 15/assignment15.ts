// Store a list of people to invite to dinner
let guestlist = String[''] = ["Sheikh Bilal", "Moiz Akbani", "Muhammad Arsalan"]

// Print an invitation message to each person
for (const guest of guestlist){
    console.log("Dear " + guest + ", I cordially invite you to the birthday dinner on the occasion of my birthday tomorrow at our residence from 10 pm");
}

console.log("Good news! We found a bigger dinner table.")

// Add a new guest to the beginning of the array
guestlist.unshift("Javeria Khan");

// Add a new guest to the middle of the array
guestlist.splice(Math.floor(guestlist.length / 2), 0, "Sami Khatri");

// Append a new guest to the end of the array
guestlist.push("Absar Javed");


// Print a new set of invitation messages
for (const guest of guestlist){
    console.log("Dear " + guest + ", I cordially invite you to the birthday dinner on the occasion of my birthday tomorrow at our residence from 10 pm");
}
