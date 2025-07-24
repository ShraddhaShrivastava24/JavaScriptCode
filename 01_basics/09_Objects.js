// Singletion

// object literals

const MySym = Symbol("Key1");
const JsUser = {
  name: "John", 
  age: 30,
  [MySym]: "MyKey123",
  location: "USA",
  email: "jssjd@jfj",
  islogin: true,
  LastLogin: ["Monday", "Tuesday", "Wednesday"],
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["name"]);
// console.log(JsUser[MySym]); // Accessing Symbol property

Object.freeze(JsUser); // Prevents any changes to the object

// """"""""""""""""""""""" 02 object methods """"""""""""""""""""""

// singleton pattern
const tinderUser = {}

tinderUser.id = "123abc";
tinderUser.name = "John";
tinderUser.idLoggedIn = false;

// console.log(tinderUser);

// object inside object
const regularUser = 
{
  email: "jssjd@jfj",
  FullName: 
  {
    userfullname:
    {
      firstNmae:"John",
      LastName: "Doe"
    }  
  }
}
//console.log(regularUser.FullName?.userfullname.firstNmae || "No Name Found"); // Optional chaining to avoid errors if property doesn't exist

const obj1 = {1: "one", 2: "two", 3: "three"};
const obj2 = {4: "four", 5: "five", 6: "six"};  
const obj3 = {7: "seven", 8: "eight", 9: "nine"};

//const obj4 = {obj1, obj2, obj3}; // Nested object
//const obj4 = Object.assign({},obj1, obj2,obj3); // Spread operator to create a shallow copy
const obj4 = {...obj1, ...obj2, ...obj3}; // Merging objects using spread operator
//console.log(obj4); // {1: "one", 2: "two", 3: "three", 4: "four", 5: "five", 6: "six", 7: "seven", 8: "eight", 9: "nine"}

// object from database

const dbUser = [
  {
    id: 1,
    email: "jssjd@jfj",
  },
  {
    id: 2,
    email: "jdhj@jfj",
  },
  {
    id: 3,
    email: "ruier@jfj",
  },
  {
    id: 4,
    email: "jsfjds@jfj",
  }
]

dbUser[1].email
// console.log(tinderUser)
// console.log(Object.keys(tinderUser)); // Returns an array of keys in the object
// console.log(Object.values(tinderUser)); // Returns an array of values in the object
// console.log(Object.entries(tinderUser)); // Returns an array of key-value pairs in the object
// console.log(Object.getOwnPropertyNames(tinderUser)); // Returns an array of all properties (including non-enumerable) in the object
// console.log(Object.getOwnPropertySymbols(tinderUser)); // Returns an array of all symbol properties in the object
// console.log(Object.isFrozen(tinderUser)); // Checks if the object is frozen (immutable)
// console.log(Object.isSealed(tinderUser)); // Checks if the object is sealed 
//console.log(tinderUser.hasOwnProperty('isLoggedIn')); // Checks if the object is extensible (can have new properties added) 

// object destructuring

const course = {
  courseName: "JavaScript Basics",
  price: "20000",
  courceInstructor: "Shraddha"
}

const {courceInstructor: instrutor} = course; // Destructuring assignment
console.log(instrutor); // "Shraddha"