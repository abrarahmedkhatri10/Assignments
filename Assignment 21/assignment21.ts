// Creating an array
let numbers: number[] = [1, 2, 3, 4, 5];

// Accessing an index that is out of bounds
let index = 10;
console.log(numbers[index]); // Trying to access an invalid index

// The above line will throw an "IndexError: Index out of range" error
// To fix the error, we need to ensure that the index is within the valid range

// Correcting the error
if (index >= 0 && index < numbers.length) {
  console.log(numbers[index]);
} else {
  console.log("Invalid index. Please provide a valid index within the range of the array.");
}
