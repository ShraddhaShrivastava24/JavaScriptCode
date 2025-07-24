// function AddTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function AddTwoNumbers(number1, number2) {
    //let result = number1 + number2;
    //return result; // Return the result instead of logging it
    return number1 + number2 // Log the result to the console
}
AddTwoNumbers(9,null);

const result = AddTwoNumbers(5, 10); // This will log 15 to the console
//console.log(result); // This will log undefined because the function does not return a value

function loginUser(UserName)
{   
    if (UserName === undefined) {
        return "No user logged in";
    }
    return `${UserName} just logged in`;
}

//console.log(loginUser("Shraddha")); // This will log "Shraddha just logged in" to the console

function loginUserWithDefault(UserName = "Guest") {
    return `${UserName} just logged in`;
}
//console.log(loginUserWithDefault()); // This will log "Guest just logged in" to the console

function addNumbers(...numbers) { // Using rest parameter to accept any number of arguments
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
//console.log(addNumbers(1, 2, 3, 4, 5)); // This will log 15 to the console

