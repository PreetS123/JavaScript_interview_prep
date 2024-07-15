/**
 * Currying in JS---> Currying is a technique in functional programming where a function
 *                   with multiple arguments is transformed into a sequence of functions,
 *                    each taking a single arguments.
 *                    This improves composability and allows partial application of functions.
 * Example f(a,b) into f(a)(b)
 */

function f(a) {
  return function (b) {
    return `${a} ${b}`;
  };
}

// console.log(f(5)(6));

/**
 * Question 1--> sum(2)(6)(1)
 */

function sum(a) {
  return function sum1(b) {
    return function sum2(c) {
      return `Sum is ${a + b + c}`;
    };
  };
}

// console.log(sum(2)(6)(1));

/**
 * Question 2--
 * evaluate("sum")(4)(2) ==> 6
 * evaluate("multiply")(4)(2) ==>8
 * evaluate("Divide")(4)(2) ==> 2
 * evaluate('subtract')(4)(2)
 */

function evaluate(operation) {
  return function (a) {
    return function (b) {
      return operation === "divide"
        ? a % b
        : operation === "multiply"
        ? a * b
        : operation === "add"
        ? a + b
        : operation === "substract"
        ? a - b
        : "Wrong operation";
    };
  };
}

// console.log(evaluate('substract')(6)(3));

/**
 * Infinite Curring -> sum(1)(2)(3)....(n);
 */

// function add(a){
//     return function(b){
//         return a+b;
//     }
// }

// console.log(add(5)(2)()); // if we add extra parenthesis it will give typeError.

function add(a) {
  return function (b) {
    if (b) {
      return add(a + b);
    } else {
      return a;
    }
  };
}

// console.log(add(5)(2)(3)(3)());// Here I need to give empty parenthesis at end else it will return [Function(anonymous)]

/**
 * Manipulate DOM using currying.
 */

function updateElementText(id) {
  return function (content) {
    document.querySelector("#" + id).textContent = content;
  };
}

const updateHeader = updateElementText("heading");
//  updateHeader("Preeti Sharma")

/**
 * Polyfill for function currying
 * Curry() implementation
 * Converts f(a,b,c) into f(a)(b)(c)
 */

function curry(func) {
  return function curriedFunc(...args) {
    if (args.length >= func.length) {
      return func(...args);
    } else {
      return function (...next) {
        return curriedFunc(...args, ...next);
      };
    }
  };
}

const sum1 = (a, b, c) => a + b + c;

const totalSum1 = curry(sum1);
console.log(totalSum1(7)(8)(2));
