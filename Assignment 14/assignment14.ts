// Store a list of people to invite to dinner
let guestlist = String[''] = ["Sheikh Bilal", "Moiz Akbani", "Muhammad Arsalan"]

// Print an invitation message to each person
for (const guest of guestlist){
    console.log("Dear " + guest + ", I cordially invite you to the birthday dinner on the occasion of my birthday tomorrow at our residence from 10 pm");
}

// Identify the guest who can't make it
let guestcantmakeit: String = guestlist[2]
console.log(guestcantmakeit + " is unable to attend the dinner")

// Replace the guest who can't make it with a new person
guestlist[2] = "Absar Javed"

// Print a second set of invitation messages
for (const guest of guestlist){
    console.log("Dear " + guest + ", I cordially invite you to the birthday dinner on the occasion of my birthday tomorrow at our residence from 10 pm");
}
