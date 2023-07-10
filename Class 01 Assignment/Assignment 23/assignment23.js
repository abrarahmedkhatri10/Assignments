// Tests for equality and inequality with strings
console.log("Is 'apple' == 'apple'? I predict true.");
console.log('apple' == 'apple');
console.log("Is 'apple' != 'banana'? I predict true.");
console.log("apple' != 'banana");
console.log("Is 'apple' == 'Apple'? I predict false.");
console.log("apple' == 'Apple");
console.log("Is 'apple' != 'apple'? I predict false.");
console.log("apple' != 'apple");
// Tests using the lowercase function
console.log("Is 'HELLO' lowercased equal to 'hello'? I predict true.");
console.log("HELLO'.toLowerCase() == 'hello");
console.log("Is 'WORLD' lowercased equal to 'world'? I predict false.");
console.log("WORLD'.toLowerCase() == 'world");
// Numerical tests
console.log("Is 10 greater than 5? I predict true.");
console.log(10 > 5);
console.log("Is 8 less than 3? I predict false.");
console.log(8 < 3);
console.log("Is 7 greater than or equal to 7? I predict true.");
console.log(7 >= 7);
console.log("Is 4 less than or equal to 2? I predict false.");
console.log(4 <= 2);
// Tests using "and" and "or" operators
console.log("Is 'cat' in 'cat' and 'dog'? I predict true.");
console.log('cat' == 'cat' && "cat' == 'dog");
console.log("Is 'cat' in 'cat' or 'dog'? I predict true.");
console.log('cat' == 'cat' || "cat' == 'dog");
// Test whether an item is in an array
var fruits = ['apple', 'banana', 'orange'];
console.log("Is 'apple' in the fruits array? I predict true.");
console.log(fruits.includes('apple'));
console.log("Is 'grape' in the fruits array? I predict false.");
console.log(fruits.includes('grape'));
// Test whether an item is not in an array
console.log("Is 'pear' not in the fruits array? I predict true.");
console.log(!fruits.includes('pear'));
