// What are First class function in JavaScript?
// A function that can be used as a variable or as a parameter for another function is known as FIRST CLASS FUNCTION.

/* Why functions are called as first class functions
It can be assigned to a variables
Passed as an arguments
Returned from functions.
Becuase of these flexibilities functions are powerful for writing modular and flexible code.

*/ 

function square(x){
    return x*x
}

function printSquare(a){
    console.log("Square is"+" "+ a);
}

// printSquare(square(9)); //output-->81


/**
 * Function expression --> function stored in a variable
 */

let b= function(){
    console.log("b called");
}



// What is IFIE?

// Imidiatly invoked function expression

(function(x){
    console.log(x*x);
})(5)


// Dummy question on scope of a function

var x=4;
function abc(){
    console.log("inside",x);// output--> undefined
    var x=9;
}
// abc()

// What is Callback function?
// A function that is being called as an argument to another function is called callback function
//   For instance-->
  
    document.addEventListener("click",function(){
        console.log("I'm a callback function");
    })

    setTimeout(() => {
       console.log("I uses callback function"); 
    }, 100);


    // Difference between arrow function and normal function

    // Arrow function --> 1) It is not hoisted. 2) Implicit return keyword. 3) Doesn't have this keyword. 4) We can't use arguments in arrow function.
    // Normal function --> 1) It uses this keyword.

    // Implicit Return keyword 
      const sq= (num)=> num*num;