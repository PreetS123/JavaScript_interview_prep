/**
 * Create a function multiplyByTwo(obj) that multiplies all numeric
 * property values of nums by 2.
 */

let nums = {
  a: 100,
  b: 200,
  title: "my nums",
};

function multiplyNumericByTwo(nums) {
  for (key in nums) {
    // console.log(nums[key]);
    if (typeof nums[key] === "number") nums[key] *= 2;
  }
  console.log(nums);
}

// multiplyNumericByTwo(nums);

const a = {};
const b = { key: "b" };
// since b is assigned a object so a[b]= ["object object"] is a key and same happen with c that's why it changes the value.
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

// console.log(a[b]); // op-> 456;

const settings = {
  username: "Piyush",
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ["level", "health"]);
// if we provide stringified property then it will only stringify those propety that would be stringified.
// console.log(data); //{"level":19,"health":90};

const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

// console.log(shape.diameter()) // 20
// console.log(shape.perimeter()); // NAN because in arrow function this is pointed to window object;

/**
 * What is destrucuring in object --> Taking out specific property from an object.
 */
let user = {
  name: "Preeti",
  age: 24,
};

const { name: myName } = user; // destrucuting and renaming is happening here.
// console.log(myName);

let c1 = {greeting:"hey!"};
let d;
d=c1;
c1.greeting="Hello";
// console.log(d.greeting)// op--> Hello because d refers to c1 and any change in c1 would change d too.


// console.log({a:1}=={a:1})//op-> false since both are in different merroy space.

let person ={name:'Lynda'};
const members= [person];
// person= null;// this wont affect members as it is getting copied into an array.
person.name=null // now output would change [{name:null}]

// console.log(members)// [{name:'Lynda'}];

const value= {number:10};

const multiply =(x={...value})=>{
  console.log(x.number *= 2 );
}

// multiply()// 20
// multiply()// 20 it will be same as x is coping value 
// multiply(value); // 20
// multiply(value); // 40 since now value is not getting copied


function changeAgeAndReference(person){
  person.age = 25;
  person= {
    name:"JHon",
    age:50,
  }
  return person;
}

const personObj1= {
  name:"Alex",
  age:30
}

// console.log(changeAgeAndReference(personObj1))

/**
 * Shallow copy --> When object keeps the reference of other object.
 * Deep Copy --> When object is completly cloned into other object.
 */

let user1={
  name:"Preeti",
  age:24,
}

// const objClone= Object.assign({},user); // this is one method to clone an object
// const objClone= {...user1}
// const objClone = JSON.parse(JSON.stringify(user1))
console.log(user,objClone)