

// Spred operator--> When we need to access value one by one.
// Rest operator--> When we have multiple inputs and we don't know the exact number of inputs then we use rest operator.


function num(...nums){ // here rest operator is being used
    let multiply=1;
    for(let i=0; i<nums.length; i++){
        multiply*=nums[i];
    }
    return multiply;
}
let arr=[10,2,3,9];

console.log(num(...arr)); // here spread operator is being used