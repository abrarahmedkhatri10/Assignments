// Store a list of people to invite to dinner
let guestlist = String[''] = ["Javeria Khan", "Sheikh Bilal", "Moiz Akbani", "Muhammad Arsalan", "Absar Javed"]

// Print an invitation message to each person
for (const guest of guestlist){
    console.log("Dear " + guest + ", I cordially invite you to the birthday dinner on the occasion of my birthday tomorrow at our residence from 10 pm");
}

console.log("Unfortunately, the new dinner table won't arrive in time for the dinner.")

console.log("We can invite only two people for dinner.");

// Remove guests until only two names remain in the list
while (guestlist.length > 2) {
    const removedguest: string = guestlist.pop()!;
    console.log("Sorry, " + removedguest +" , I can't invite you to dinner.")
}

// Print a message to the two remaining guests
for (const guest of guestlist){
    console.log("Dear " + guest + ", you're still invited to dinner. See you soon!");
}

// Empty the guest list
guestlist [0]

console.log ("Empty guest list: "+ guestlist +"");
