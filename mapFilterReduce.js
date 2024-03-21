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

let output = arr.myMap((el,i,arr) => {
  return el * 3;
});
console.log("myMap",output);
