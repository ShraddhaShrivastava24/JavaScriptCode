// conditional operators
// if, else if, else
// switch, case, default
// <, >, <=, >=, ==, ===, !=, !==

if (3 === "3") {
  console.log("3 is equal to 3");
}
else
{
  console.log("3 is not equal to 3");
}   
// if (3 === "3") {
//   console.log("3 is strictly equal to '3'");
// }

// nested if-else
let age = 20;
if (age >= 18) {
  console.log("You are an adult");
  if (age >= 21) {
    console.log("You can drink alcohol");
  } else {
    console.log("You cannot drink alcohol");
  }
}

//if-else ladder
let marks = 85;
if (marks >= 90) {
  console.log("Grade: A+");
}   else if (marks >= 80) {
  console.log("Grade: A");
}
else if (marks >= 70) {
  console.log("Grade: B");
}
else if (marks >= 60) {
  console.log("Grade: C");
}
else if (marks >= 50) {
  console.log("Grade: D");
}
else {
  console.log("Grade: F");
}

// switch statement
let day = 3;        
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}   

// Nulish coalescing operator ??
let userInput = null;
let defaultValue = "Default Value";
let finalValue = userInput ?? defaultValue;
console.log(finalValue); // Output: Default Value   

// Ternary operator
let isLoggedIn = true;      
let message = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(message); // Output: Welcome back!  
