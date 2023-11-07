var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Store the locations in an array
var Locations = ["London", "Thailand", "China", "Mexico", "Canada", "Australia", "Poland"];
// Print the array in its original order
console.log("Original Order:", Locations);
// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical order:", __spreadArray([], Locations, true).sort());
// Show that the array is still in its original order
console.log("Original Order:", Locations);
// Print the array in reverse alphabetical order without changing the original list
console.log("Reverse Alphabetical Order:", __spreadArray([], Locations, true).sort().reverse());
// Show that the array is still in its original order
console.log("Original Order:", Locations);
// Reverse the order of the list
Locations.reverse();
// Print the array to show the changed order
console.log("Reversed Order:", Locations);
// Reverse the order of the list again
Locations.reverse();
// Print the array to show it's back to its original order
console.log("Original Order:", Locations);
// Sort the array in alphabetical order
Locations.sort();
// Print the array to show the changed order
console.log("Alphabetical Order:", Locations);
// Sort the array in reverse alphabetical order
Locations.sort(function (a, b) { return b.localeCompare(a); });
// Print the array to show the changed order
console.log("Reverse Alphabetical Order:", Locations);
