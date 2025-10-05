//  primitive

// 7 types : string,number,boolean,null,undefined,symbol,bigint

const score = 100
const scorevalue = 100.3


const isloggedIn = false;
// const outsidetemp = null  iska mtlb ye khali h

let userId; //undefined

const id = symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId); //false aayega value same h pr false aayega

const bigNumber = 2343252534534n


// javascript is  a dynamically type language

// reference (non primitive)  non primitive datatype ka typeof object aata h

// array,objects,functions
 const hero = ["shaktimaan", "naagraaj","doga"] //array


let myobj = {
    name:"aksheya",
    age: 21,
}
const myfunction = function(){
    console.log("hello world");
    
}

  // ****** type of val *****
  /*
  undefined = "undefined"
  null = "object"
  boolean = "boolean"
  number = "number"
  string = "string"

  */


  // ++++++++++++++++++++++++++++++++++++

  // stack(primitive) yaha jo bhi valriable bnaya h uska copy milta h
  // heap(non-primitive) yaha jo bhi variable bnaya h uska reference milta h too agar change kiya toh jo change hua h vo hi aayega dono jagah