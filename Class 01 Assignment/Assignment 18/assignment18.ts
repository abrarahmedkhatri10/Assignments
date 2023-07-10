// Store a list of people to invite to dinner
const guestlist = String[''] = ["Javeria Khan","Sheikh Bilal", "Moiz Akbani", "Muhammad Arsalan","Absar Javed"]

// Print an invitation message to each person
for (const guest of guestlist){
    console.log("Dear " + guest + ", I cordially invite you to the birthday dinner on the occasion of my birthday tomorrow at our residence from 10 pm");
}

// Print the number of people being invited to dinner
console.log("Number of people invited to dinner: " + guestlist.length + "")
