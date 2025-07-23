let myDate = new Date();
console.log(myDate.toString()); // Current date and time
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log( typeof myDate);

let myDate2 = new Date(2023, 0, 1); // January 1, 2023
console.log(myDate2.toDateString()); // Specific date and time

let myDate3 = new Date()
console.log(myDate3.toLocaleString('default',{
    weekday: 'long', // Get the full name of the weekday
})); // Get the year