let arr = [2, 4, 6, 8, 10];

Array.prototype.myMapFunc = function (cb) {
  let temp = [];
  for (let i = 0; i < this.length; i++) {
    temp.push(cb(this[i], i, this));
  }
  return temp;
};

let mapOut = arr.myMapFunc((el) => {
  return el * 3;
});
console.log(mapOut);
