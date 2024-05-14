// What are First class function in JavaScript?
// A function that can be used as a variable or as a parameter for another function is known as FIRST CLASS FUNCTION.

function square(x){
    return x*x
}

function printSquare(a){
    console.log("Square is"+" "+ a);
}

printSquare(square(9)); //output-->81



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
abc()