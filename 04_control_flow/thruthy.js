// yaha pr hum maan lete h ki value true hi hogi

const userId = ebk007

if(userId){
    console.log("got userID");
    
} else {
    console.log("don't have userId");
    
}

// falsy value

// false,0,-0,bigint 0n,"",null, undefined,nan

// truthy value
// "0",'false',[],{},function(){}," "

if(userId.length === 0){
    console.log("Array is empty");
    
}

const emptyObject = {} 

if (Object.keys(emptyObject).length === 0){
    console.log("object is empty ");
    
}

// Nullish Coalescing Operator (??): null undefined   // agar program me null ya undefiined nhi chahiye toh hum ye use krte h

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20



console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")