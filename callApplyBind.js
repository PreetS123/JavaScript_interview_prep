
/**
 * 
 * Reference to study   https://youtu.be/SaWTn1ZNTpo?si=XdG_ghviwOEPOTQW
 * Blog https://betterprogramming.pub/how-and-why-to-use-call-apply-and-bind-in-javascript-17d50d5a1eb0
 * 
 * Call apply and bind method is just like function borrowing for multiple use cases.
 * 
 * CAll appply and bind methods are use for minimize the code repetation and for better reusability and readability.
 * 
 * 
 */

/**
 * Call Function--> Call() method invokes a given function using this value and arguments provide one by one.
 */

function callMethod(greet1,greet2){
    console.log(greet1, this.fname, this.lname+".",greet2);
}

let emp1={
    fname:"Preeti",
    lname:"Sharma"
}

let emp2={
    fname:"Viabhav",
    lname:"Jhadhav"
}
//call is being used here
callMethod.call(emp1,"Hello","How are you?");
// apply is being used here
callMethod.apply(emp2,["Hello","How are you?"]);

// bind function creates an instance of the function and then we can pass as many argument we want.
let myBind=callMethod.bind(emp1);
myBind("Hi","How are you?");

/**
 * Prototype in javaScript
 * JavaScript is a prototype based language so whenever we creates any methods in javaScript, js engine automatically adds a prototype property to it.
 * Prototype property is basically an object where we can attach method or properties in a prototype object which enables all the other object to inherit these properties.
 */

let grandfather={
    eyes:"blue"
}

let father= Object.create(grandfather);
father.eyes="Yellow";
console.log(father);