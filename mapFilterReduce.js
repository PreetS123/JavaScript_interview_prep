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

/// Practice questions
let students = [
  { name: "Preeti", rollNo: 31, marks: 80 },
  { name: "Prity", rollNo: 4, marks: 55 },
  { name: "Priti", rollNo: 20, marks: 95 },
  { name: "Preety", rollNo: 55, marks: 45 },
];

// Return the name of student in capital letters

let caps = students.myMapMethod((ele) => ele.name.toUpperCase());
// console.log("caps", caps);

// return who got  marks more than 60

let more60 = students.myFilterMethod((ele) =>ele.marks>60 && ele.rollNo >15);
// console.log("more than 60", more60);


// sum of all marks
let allSum= students.reduce((acc,cv)=>acc+cv.marks,0);
// console.log("all",allSum);


// return names which are more than 60
let names60= students.myFilterMethod((ele)=>ele.marks>60).myMapMethod((ele)=>ele.name);
// console.log("name60",names60);

// provide 20 as grace marks to student who have marks less than 60 and then find the sum of student having marks more than 60
 let grace60=students.map((ele)=>{
  if(ele.marks<60) ele.marks+=20;
  return ele;
 }).filter((el)=>el.marks>60).reduce((acc,cv)=>acc+cv.marks,0);
 console.log("grace 60",grace60);
