const myArray = [1, 2, 3, 4, 5];
const Myheros = ['Ironman', 'Spiderman', 'Hulk', 'Thor', 'Captain America'];

// console.log(myArray[1]);
// console.log(Myheros[2]);

// Array methods
myArray.push(6); // Adds an element to the end
// console.log(myArray);

myArray.pop(); // Removes the last element
// console.log(myArray);

myArray.unshift(9); // Adds an element to the beginning
// console.log(myArray);

myArray.shift(); // Removes the first element
// console.log(myArray);

myArray.splice(2, 1); // Removes an element at index 2
// console.log(myArray);

myArray.includes(3); // Checks if the array includes the element 3
// console.log(myArray.includes(3));

myArray.indexOf(4); // Finds the index of the element 4
// console.log(myArray.indexOf(4));

// slice and splice

console.log ("A ", myArray);
const slicedArray = myArray.slice(1, 3); // Returns a shallow copy of a portion of an array
// console.log(slicedArray);

// console.log(slicedArray);
// console.log("B ", myArray);

const splicedArray = myArray.splice(1, 2); // Changes the contents of an array by removing or replacing existing elements
// console.log(splicedArray);
// console.log("C ", myArray); 

// console.log(Array.isArray("Shraddha")); // Checks if myArray is an array
// console.log(Array.from("Shraddha")); // Converts a string to an array
// console.log({name: "Shraddha"}); // Creates an object