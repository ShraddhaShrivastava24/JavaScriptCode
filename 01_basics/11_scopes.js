let A =11
const B = 22;
var C = 33;     

if (true) {
    let A = 44; // Block scoped, only accessible within this block
    const B = 55; // Block scoped, only accessible within this block
    var C = 66; // Function scoped, accessible outside this block
    console.log("Inside block:", A, B, C); // 44, 55, 66
}

console.log("Outside block:", A, B, C); // 11, 22, 66

//Nested scopes of variables in functions
function outerFunction() {
    let x = 10;
    const y = 20;

    function innerFunction() {
        let z = 30;
        console.log("Inner function:", x, y, z); // 10, 20, 30
    }

    innerFunction();
    console.log("Outer function:", x, y); // 10, 20
}