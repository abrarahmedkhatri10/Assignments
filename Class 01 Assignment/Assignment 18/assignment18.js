// Store a list of people to invite to dinner
var guestlist = String[''] = ["Javeria Khan", "Sheikh Bilal", "Moiz Akbani", "Muhammad Arsalan", "Absar Javed"];
// Print an invitation message to each person
for (var _i = 0, guestlist_1 = guestlist; _i < guestlist_1.length; _i++) {
    var guest = guestlist_1[_i];
    console.log("Dear " + guest + ", I cordially invite you to the birthday dinner on the occasion of my birthday tomorrow at our residence from 10 pm");
}
// Print the number of people being invited to dinner
console.log("Number of people invited to dinner: " + guestlist.length + "");
