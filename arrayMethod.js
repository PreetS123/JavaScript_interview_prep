/**
 * Their is a number of array methods in javaScript.
 * Some of the basic array method are:
 * Array length--> Used to find the length of an array.
 * Array toString()--> It is used to convert an array into string.
 * Array.at()--> It returns the indexed element from an array.
 * Array.join()--> It is similar to toString but if we want to add any seperator in-between then we can achive with it.
 * Array.pop()-->The pop() methods removes the last element from an array.
 * Array.shift()--> removes the first element from the array.
 * Array.unshift()--> adds a new element at 0th index of array.
 * Array.concat()--> merges two array
 * Array.splice()--> The splice method can used to add or remove new items to an array at a particular index.
 * Array.slice()--> The slice() methods take out a piece of an array into a new array.
 */

//Array.toString()
let fruits=["Apple","Banana","Grapes","Mango"]
console.log(typeof(fruits.toString()));// type is string.

//Array.at()
console.log(fruits.at(2));

// Array.join()
console.log(fruits.join("_"));//Apple_Banana_Grapes_Mango


// Array.pop()
console.log(fruits.pop());//Mango

// Array.push()
fruits.push("Pear","Watermelon");
console.log(fruits);

//Array.shift()
fruits.shift()
console.log(fruits);

//Array.unshift()
fruits.unshift("Orange");
console.log(fruits);

//Array.concat();
let fruits1=["Pomegranate","Peach"]
let fruitss=fruits1.concat(fruits)
console.log(fruitss);

//Array.splice(element to add,how many element should be removed,new element to be added)
//adding of new element
fruits.splice(2,0,"Fig","Lemon","Pomegranate","Peach");
console.log(fruits);
//removing of element
fruits.splice(0,1);
console.log(fruits);


//slice()
const citrus=fruits.slice(3,5);
console.log(citrus);