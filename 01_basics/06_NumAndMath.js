const score = 400

console.log(score)

const banalce = new Number(100)
console.log(banalce)

console.log(banalce.toString().length)
console.log(banalce.toFixed(2))

const othernumber = 123.443545

console.log(othernumber.toPrecision(4))

const valnumber = 10000000

console.log(valnumber.toLocaleString('en-IN'))


//++++++++++++++++++++++++++ Maths ++++++++++++++++++++++//

//Abs
//round
//ceil
//floor
//random


console.log(Math.random());
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);

const min =10
const max =20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);