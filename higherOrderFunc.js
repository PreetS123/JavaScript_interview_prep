

/**
 * What is higher order function ?
 * A function that takes another function as an argument or return a function is known as higher order function.
 */

/**
 * Explain what a higher-order function is in JavaScript and provide an example.

A functions that takes a function as an argument or return a function is known as higher order function.

Example:
let arr=[2,4,5,6]
  function circumferenceArea(x,logic){
      return Math.PI * x * logic;
  }
  
  function caculate(arr){
     let out=[];
     for(let i=0; i<arr.length; i++){
        out.push(circumferenceArea(arr[i],2))
     }

     return out;
  }
  console.log(caculate(arr));

 * How do higher-order functions enhance the flexibility of your code?
  It provide flexibility to out=r code
  Reusability
  DRY concept ferfectly fits here.

 * How does the map() function work in JavaScript? Can you implement a custom version of map() without using the built-in one?
   
  Map function is  an higher order function that takes an callback function and returns a copy of original array as per condition.

  Array.prototype.myMap= function (cb){
    let temp=[];
    for(let i=0; i< this.length; i++){
       temp.push(cb(this[i],i,this))
    }
    return temp;
}

let arr=[2,8,5,9];
let out1=arr.myMap((el)=>el*2);
console.log(out1);


* What is the difference between forEach(), map(), and reduce()? When would you use one over the other? Provide examples of each.



* How would you use the reduce() function to sum the values in an array of objects?



* Example: Given an array of products with prices, calculate the total price using reduce().



* Explain how a function that returns another function works, and what are the use cases for this? Can you provide a practical example?



* Write a higher-order function filterBy that takes a predicate function and an array as arguments and returns a new array filtered based on the predicate.



* How would you use sort() in combination with a higher-order function to sort an array of objects based on a specific property (e.g., age, salary)?



* Can you explain how currying works in JavaScript and provide a simple implementation of a curried function?

Example  
 function curry(func){
    return function curried(...args){
        if(args.length>=func.length){
            return func.apply(this,args);
        }
        else{
            return function(...nextArgs){
                return curred.apply(this,args.concat(nextArgs))
            }
        }
    }
 }

* What is the purpose of function composition in JavaScript? Can you write a compose() function that takes multiple functions and returns a composed function?



* What are the pros and cons of using higher-order functions in terms of performance and readability in large-scale JavaScript applications?
 

*/