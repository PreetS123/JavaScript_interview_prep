/*
 Map method in javaScript -->  The map method in js creates a new array populated with the results of
                               calling a provided function on every element in the calling array.
                               It doesn't modify the original array but returns the new modified array
                               based on the callback function's logic.
*/

const nums = [1, 2, 3, 4, 5];

Array.prototype.myMapMethod = function (cb) {
  let temp = [];
  // this---> this is the length of parent array on which we perform map method.
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

const multiplyThree = nums.myMapMethod((num, i, arr) => num * 3);

console.log(multiplyThree);

/**
 * Filter method--> Filter method creates a new arraay and returns only those element
 *                  that satisfy the condition provided inside the callback function.
 */
Array.prototype.myFilterMethod = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

let greaterThan = nums.myFilterMethod((ele) => ele > 2);

console.log(greaterThan);

/**
 * Reduce Method-->
 */

Array.prototype.myReduceMethod = function (cb, initialValue) {
  var accumulator = initialValue;

  for (let i = 0; i < this.length; i++) {
    // if the user forgets to provide an initial value the the reduce method takes default value as first index.
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};

let sum = nums.myReduceMethod((acc, cv, i, arr) => acc + cv, 0);

console.log("even", sum);
