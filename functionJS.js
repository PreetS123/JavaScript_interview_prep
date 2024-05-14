// What are First class function in JavaScript?
// A function that can be used as a variable or as a parameter for another function is known as FIRST CLASS FUNCTION.

function square(x){
    return x*x
}

function printSquare(a){
    console.log("Square is"+" "+ a);
}

printSquare(square(9)); //output-->81