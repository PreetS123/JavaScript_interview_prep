/**
 * Closures--> A function bundled with its lexical scope is called Closures.
 *  Or in simple words a function called inside another function is called closures.
 */

function outerFunc(x) {
  return function middleFun(y) {
    return function innerFunc(z) {
      console.log(x + y + z);
    };
  };
}

// outerFunc(5)(3)(2);

/**
 * Closure Scope Chain
 * Every closure has three scope : 1.) Local scope
 *                                 2.) Global scope
 *                                 3.) Outer Function Scope
 */
// Practice question

let count = 0;
(function printCount() {
  if (count === 0) {
    let count = 1; // showding
    console.log(count); //1
  }
  console.log(count); // count=0;
})();

//2. Write a function that would allow you to do this.
/**
 * var addSix=createBase(6);
 * addSix(10) // 16
 * addSix(21) // returns 27
 */

function addSix() {
  let x = 6;
  return function (y) {
    return x + y;
  };
}

//  console.log(addSix()(10));
//  console.log(addSix()(21));

/**
 * Optimize the code
 */

function find(index) {
  let a = [];
  for (let i = 0; i < 1000000; i++) {
    a[i] = i * i;
  }
  // here by returning the function time is reduced but if we directly log the value then it will take more time
  return function (index){
  console.log(a[index]);
  }
}

// const closure= find();
// console.time("6");
// closure(6);
// console.timeEnd("6");
// console.time("50");
// closure(50);
// console.timeEnd("50");

/*
function a(){
    // here if we use var then output would be 3 3 3
    // but if we use let the output would be 0 1 2
    // now if we nned to use var only then we will declare a closure and wrap the log inside a function
    for(var i=0; i<3; i++){
        setTimeout(function log(){
            console.log(i);
        },i * 1000);
    }
}
a();
*/

function a(){
    for(var i=0 ; i< 3; i++){
         function inner(i){
           setTimeout(function(){
            console.log(i);
           },i*1000)
        }
        inner(i);
    }
}

// a() // 0 1 2

/** Use closure to create a private counter */


function counter(){
  var _counter=0;
 function add(inc){
   _counter+=inc;
  }

  function retrive(){
    return "Counter = " + _counter;
  }
  return { add , retrive};
}

let c= counter();
c.add(8);
console.log(c.retrive());
