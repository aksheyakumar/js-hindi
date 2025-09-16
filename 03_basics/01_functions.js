function addnumber(number1,number2){
    let result = number1 + number2
    return result
}

function addnumber(number1,number2){
    return number1 + number2
    
}

const result = addnumber(12,21)

console.log("result :",result);

function loggedin(username = "aksheya"){
    if(!username){
        console.log("enter a valid username");
        return   
    }
    return `${username} just logged in`
}

console.log(loggedin("aksheya kumar"));

function shoppingcart(...num1){
    return num1
}

console.log(shoppingcart(100,2200,3201,332340,));

let user = {
    name : "aksheya kumar",
    price:3244
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

handleobject({
    username:"prince",
    price:565
})

handleobject({
    username:"abhikaar",
    price:654
})

let myarray = [204,5445,4223,6543]

function handlearray(getarray){
    return getarray[2]
}

console.log(handlearray(myarray));
console.log(handlearray([123,234,345,456]));

