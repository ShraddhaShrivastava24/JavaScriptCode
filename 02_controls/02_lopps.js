// loops - for, while, do while

// for loop
for (let i = 0; i < 5; i++) {
  console.log("Iteration: " + i);
}

// for of loop
const array = [10, 20, 30, 40, 50];
for (const value of array) {
  console.log("Value: " + value);
}
// for in loop
const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
  console.log("Key: " + key + ", Value: " + object[key]);
} 

// while loop
let count = 0;
while (count < 5) {
  console.log("Count: " + count);
  count++;
}   
// do while loop
let index = 0;
do {
  console.log("Index: " + index);
  index++;
} while (index < 5);
// break and continue in loops
for (let j = 0; j < 10; j++) {
  if (j === 5) {
    console.log("Breaking at j = " + j);
    break; // exits the loop when j is 5
  }
  if (j % 2 === 0) {
    console.log("Even number: " + j);
    continue; // skips the rest of the loop for even numbers
  }
  console.log("Odd number: " + j);
}

// nested loops
for (let x = 0; x < 3; x++) {
  for (let y = 0; y < 2; y++) {
    console.log("x: " + x + ", y: " + y);
  }
}   

// loop with break and continue
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let num of numbers) {
  if (num === 5) {
    console.log("Skipping number: " + num);
    continue; // skips the number 5
  }
  if (num > 8) {
    console.log("Breaking at number: " + num);
    break; // exits the loop when num is greater than 8
  }
  console.log("Number: " + num);
} 

// infinite loop example (commented out to avoid running it)
// while (true) {
//   console.log("This will run forever!"); // be careful with infinite loops
// }  
// forEach loop
const fruits = ["apple", "banana", "cherry"];
fruits.forEach((fruit, index) => {
  console.log("Fruit " + index + ": " + fruit);
});

// map loop
const numbersArray = [1, 2, 3, 4, 5];
const doubled = numbersArray.map(num => num * 2);
console.log("Doubled numbers: " + doubled);   
// filter loop
const filtered = numbersArray.filter(num => num > 2);
console.log("Filtered numbers (greater than 2): " + filtered);  
// reduce loop
const sum = numbersArray.reduce((accumulator, current) => accumulator + current, 0
);
console.log("Sum of numbers: " + sum);
// find loop
const found = numbersArray.find(num => num === 3);
console.log("Found number: " + found);    
// findIndex loop
const foundIndex = numbersArray.findIndex(num => num === 3);
console.log("Found index of number 3: " + foundIndex);  
// some loop
const hasEven = numbersArray.some(num => num % 2 === 0);
console.log("Array has even number: " + hasEven);
// every loop
const allEven = numbersArray.every(num => num % 2 === 0);
console.log("All numbers are even: " + allEven);    
