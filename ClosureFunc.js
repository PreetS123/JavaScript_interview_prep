/**
 * Closures--> A function bundled with its lexical scope is called Closures.
 *  Or in simple words a function called inside another function is called closures.
 */

/** 
 * What is a closure in js and why it is useful?
 * Explain how closures can be used to create private variables in js.
 * 
*/
function outerMost(){
  let c=0;
  return function(){
    c++;
    console.log(c);
  }
}
let cc=outerMost();
// cc();
// cc();
// op--> 1 
     //  2

    /*  create a function that remembers its argument and adds it to a new argument passed later? */
    function remArg(p1){
      return function rem(p2){
        console.log(p1+p2);
      }
    }
    // let out=remArg(5);
    // out(10)
    /**
     * Fix this loop
     * for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);
    }, 1000);
}
     */
    for (var i = 0; i < 5; i++) {
      function close(x){
      setTimeout(function() {
          console.log(x);
      }, 1000);
    }
    close(i);
  }

  /**
   * Explain how closures can help in maintaining the state of a function between invocations.
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
  return function (index) {
    console.log(a[index]);
  };
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

function a() {
  for (var i = 0; i < 3; i++) {
    function inner(i) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
    inner(i);
  }
}

// a() // 0 1 2

/** Use closure to create a private counter */

function counter() {
  var _counter = 0;
  function add(inc) {
    _counter += inc;
  }

  function retrive() {
    return "Counter = " + _counter;
  }
  return { add, retrive };
}

let c = counter();
c.add(8);
// console.log(c.retrive());

/**
 * What is Module Pattern ?
 * The module pattern uses an IIFE to encapsulate private variables
 * and functions, exposing only a public interface.
 */

let Module = (function () {
  // thse functions are not returnable
  function privateMethod() {
    console.log("private");
  }
  return {
    publicMethod: function () {
      /// we can call privateMethod();
      console.log("public");
    },
  };
})();
// Module.publicMethod();
// Module.privateMethod(); // this can't be accesible outside the Module

/**
 * Make the function called only once using closure
 * let view;
function likeTheView(){
  view="Mountain";
  console.log(view);
}   // this should be called once although we call multiple times.
 */

let view;
function likeTheView() {
  let called = 0;
  return function () {
    if (called > 0) {
      console.log("Already viewed");
    } else {
      view = "Mountain";
      console.log(view);
      called++;
    }
  };
}

let isViewed = likeTheView();
// isViewed();
// isViewed(); // Already viewed
// isViewed(); // already viewed

/**
 * Make more genric code for it.
 * Once Polyfill
 */

function once(func, context) {
  let ran;
  return function () {
    if (func) {
      ran = func.apply(context || this, arguments);
      func = null;
    }
    return ran;
  };
}

const hello= once(()=> console.log("hello"));

// hello();
// hello();
// hello();


/**
 * What is memoize?
 */

/**
 * Closure in javaScript?
 * Difference between Closure and Scope?
 */

/**
 * Closure--> Closure refers to a function's ability to retain access to variable from its lexical scope 
 * even after that scope has closed.
 * Scope --> It refer to the visibility and accessibility of variables within a specific context,
 *        such as global, function or block scope.
 */