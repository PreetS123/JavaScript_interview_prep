let arr = [1, 3, 6, 9, 12];

//approaching custom map method -->
/**
 * first it return three parameters
 * parameters= each element, index, and complete array
 *
 *  */
Array.prototype.myMap = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

let output = arr.myMap((el, i, arr) => {
  return el * 3;
});
console.log("myMap", output);

/**
 * Filter returns those element which satisfies the condition
 * returns an array of element
 */

Array.prototype.myFilter = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      temp.push(this[i]);
    }
  }
  return temp;
};

let filterOut = arr.myFilter((el) => {
  return el % 2;
});

console.log("filter", filterOut);

/*
Reduce function custom application
We need to know that reduce function return accumulator, current value, index and array.
*/

Array.prototype.myReduce = function (cb, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < this.length; i++) {
    accumulator = accumulator ? cb(accumulator, this[i], i, this) : this[i];
  }
  return accumulator;
};


let reduceOut = arr.myReduce((acc,cv)=>{
    return acc+cv;
},0) 

console.log("reduceOut",reduceOut);