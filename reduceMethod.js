//Can you use reduce() to count the occurrences of items in an array?

const fruits = ['apple', 'banana', 'apple', 'orange'];
let out= fruits.reduce((acc,cv)=>{
    if(acc[cv]){
        acc[cv]= ++acc[cv];
    }else{
        acc[cv]=1
    }
    return acc;
},{})
console.log(out)


// How would you use reduce() to create an object from an array of key-value pairs?

/** 
const keyValuePairs = [['name', 'Alice'], ['age', 25]];
let obj=keyValuePairs.reduce((acc,[key,value])=>{
   acc[key]=value;
   return acc;
},{})
console.log(obj);
*/


/*
//How can reduce() be used to find the maximum or minimum value in an array?

let arr=[3,5,2,8,9,1,15,12,0]

let out=arr.reduce((acc,cv) =>{
    return acc > cv ? acc : cv;
},-Infinity)

console.log(out)
*/

//How would you use reduce() to flatten a nested array?

/*const nestedArray = [[1, 2], [3, 4], [[5]]];
 
let arrayFlattner= function(arr){
   
    let out=arr.reduce((acc,cv)=>{
        if(Array.isArray(cv)){
            return acc.concat(arrayFlattner(cv))
        }else{
            return acc.concat(cv)
        }
    },[])
  
 return out;
}

 console.log(arrayFlattner(nestedArray));
 */

/*
let user=[
    {firstname:"ab",lastname:"preeti",age:34},
    {firstname:"cd",lastname:"sharma",age:18},
    {firstname:"ef",lastname:"pallawi",age:29},
    {firstname:"gh",lastname:"sharma",age:34}
]

//{34:2,18:1,29:1}

let out= user.reduce((acc,cv)=>{
    if(acc[cv.age]){
        acc[cv.age]= ++acc[cv.age]
    }else{
        acc[cv.age]=1;
    }
    return acc;
},{})

console.log(out)

// first name of all the people whoes age is 30
// let out=user.filter((el)=>el.age>30).map(el=>el.firstname)
let out= user.reduce((acc,cv)=>{
    if(cv.age>30){
        acc.push(cv.firstname)
    } 
    return acc;
},[])
 console.log(out)
*/
