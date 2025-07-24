const user = {
    userName: 'Shraddha',
    price: 100,

    welcomeMassage: function() {
        // console.log(`Welcome ${this.userName} to the course`);
        // console.log(this);
    }
};
// user.welcomeMassage(); // Welcome Shraddha to the course
// user.userName = 'John';
// user.welcomeMassage(); // Welcome John to the course

// console.log(this); // In the global context, 'this' refers to the global object (window in browsers)
// // Arrow functions do not have their own 'this' context

//////////////////////////////

function chai() {
    // console.log(this);
}
chai(); // In the global context, 'this' refers to the global object (window in browsers)   

/// Arrow functions do not have their own 'this' context
const chaiArrow = () => {

    // console.log(this);
}

// implicit binding
const addtwonum = (num1, num2) => {
    return num1 + num2
}
// console.log(addtwonum(10, 20)); // 30

const addtwo = (num1, num2) => (num1 + num2);
// console.log(addtwo(10, 20)); // 30

//returning object from arrow function
const returnObject = () => ({ name: 'Shraddha', age: 25 });
