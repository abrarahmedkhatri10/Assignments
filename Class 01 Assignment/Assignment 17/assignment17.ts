// Store the locations in an array
const Locations: string[] = ["London","Thailand","China","Mexico","Canada","Australia","Poland"]

// Print the array in its original order
console.log("Original Order:", Locations);

// Print the array in alphabetical order without modifying the original list
console.log("Alphabetical order:", [...Locations].sort())

// Show that the array is still in its original order
console.log("Original Order:", Locations);

// Print the array in reverse alphabetical order without changing the original list
console.log("Reverse Alphabetical Order:", [...Locations].sort().reverse())

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
Locations.sort((a, b) => b.localeCompare(a));

// Print the array to show the changed order
console.log("Reverse Alphabetical Order:", Locations);

