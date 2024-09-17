// console.log(x); // o/p--> undefined.
var x = 10;


// console.log(y);  // o/p --> ReferenceError: not defined

function test(a) {
    console.log(a);
  }
//   test(); //o/p--> undefined.


//   console.log(a); // o/p-->  ReferenceError: Cannot access 'a' before initialization
let a = 5;


// console.log(test1()); // o/p--> TypeError: test1 is not a function

var test1 = function() {
  return "Test function";
};


function sum(a, b) {
    return a + b;
  }
  
//   console.log(sum(5)); // ? o/p--> NaN  = number + undefined


// Concept: Accessing non-existent properties of an object results in undefined.
const obj = { name: "John", age: 30 };
// console.log(obj.salary); // o/p--> undefined

const arr = [1, 2, , 4];
// console.log(arr[2]); // o/p--> undefined


//Concept: undefined is falsy, and how falsy values are handled in if conditions.
let val;
if (val) {
//   console.log("Value exists");
} else {
//   console.log("Value does not exist"); //--> o/p
}


let a1 = null;
let b;
// console.log(a1 == b);  // ? o/p--> true
// console.log(a1 === b); // ? o/p --> false


//Concept: If a function does not explicitly return a value,
//          it implicitly returns undefined, and unreachable code after return is ignored.
function greet() {
    return;
    console.log("Hello");
  }
  
//   console.log(greet()); // o/p--> undefined

const { firstName, lastName } = { firstName: "Alice" };
// console.log(lastName); // o/p --> undefined

function checkScope() {
    console.log(innerVar); // ? o/p --> undefined
    var innerVar = 50;
  }
//   checkScope();


const obj1 = {
    a: { b: { c: 42 } }
  };
  
  const x1 = obj1.a?.b?.d;
//   console.log(x1); // ? o/p--> undefined

function outer() {
    let a = 5;
    return function inner() {
      console.log(a); // ? o/p--> undefined 
      var a = 10; 
    };
  }
  
  const fn = outer();
//   fn();

const { x2 = 10, y2 = 20 } = { x2: undefined, y2: null };
// console.log(x2); // ? o/p--> 10
// console.log(y2); // ? o/p--> null

const obj2 = {
    name: "Alice",
    greet: function() {
      console.log(this.name); // ?
    }
  };
  
  const greet1 = obj2.greet;
//   greet1(); // ? o/p--> undefined


function delayLog(value) {
    setTimeout(() => {
      console.log(value); // ? o/p--> undefined
    }, 1000);
  }
  
//   let a3;
//   delayLog(a3);
//   a3 = 42;


const arr1 = [1, 2, , 4];
const result = arr1.map((item, index) => item + index);
// console.log(result); // ? [ 1, 3, <1 empty item>, 7 ]


let a4;
let b4 = a4 && 10;
let c4 = a4 || 10;

console.log(b4); // ? undefined
console.log(c4); // ?  10



