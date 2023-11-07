// Tests for equality and inequality with strings
let string1: string = "hello"
let string2: string = "world"
let string3: string = "hello"

//Equality test
console.log (string1 == string2) // False
console.log(string1 == string3) // True

//Inequality test
console.log(string1 != string2) // True
console.log(string1 != string3) // False


// Tests using the lowercase function
let text: string = "Hello, World!";

// Check if the text is lowercase
console.log(text.toLowerCase() === text);  // false

// Convert the text to lowercase and check again
let lowerText: string = text.toLowerCase();
console.log(lowerText.toLowerCase() === lowerText);  // true


// Numerical tests
let a: number = 10;
let b: number = 5;

// Equality test
console.log(a === b);  // false

// Inequality test
console.log(a !== b);  // true

// Greater than test
console.log(a > b);  // true

// Less than test
console.log(a < b);  // false

// Greater than or equal to test
console.log(a >= b);  // true

// Less than or equal to test
console.log(a <= b);  // false


// Tests using "and" and "or" operators
let fruits: string[] = ["apple", "banana", "cherry"];

// Check if "banana" is in the array
console.log(fruits.includes("banana"));  // true

// Check if "orange" is in the array
console.log(fruits.includes("orange"));  // false


// Test whether an item is in an array
let colors: string[] = ["red", "green", "blue"];

// Check if "yellow" is not in the array
console.log(!colors.includes("yellow"));  // true

// Check if "red" is not in the array
console.log(!colors.includes("red"));  // false