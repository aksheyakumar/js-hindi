// iife

// ye hum use krte h taaki global variable ke pollution se bach paaye yaa global scope me variable leak na hooo
(function chai(){  //ye named iife h
    console.log(`kya hi likhduu`);
    
}) (); //do iife ko eksaath likhne ke ye hum ye parentheses pe semicolan lgate h

( (name) => { //ye unnamed iife h
    console.log(`sab kuch likh duu ${name}`);
    
}) ("aksheya kumar")