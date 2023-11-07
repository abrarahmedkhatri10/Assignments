// Store a list of people to invite to dinner
var guestlist = String[''] = ["Sheikh Bilal", "Moiz Akbani", "Muhammad Arsalan"];
// Print an invitation message to each person
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("Dear " + guest + ", I cordially invite you to the birthday dinner on the occasion of my birthday tomorrow at our residence from 10 pm");
}
// Identify the guest who can't make it
var guestcantmakeit = guestlist[2];
console.log(guestcantmakeit + " is unable to attend the dinner");
// Replace the guest who can't make it with a new person
guestlist[2] = "Absar Javed";
// Print a second set of invitation messages
for (var _a = 0, guestlist_2 = guestlist; _a < guestlist_2.length; _a++) {
    var guest = guestlist_2[_a];
    console.log("Dear " + guest + ", I cordially invite you to the birthday dinner on the occasion of my birthday tomorrow at our residence from 10 pm");
}
