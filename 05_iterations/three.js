// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if(greet ===" "){
        continue;
    }
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India") // yaha pe sirf ek baar India print hoga aur ye order ko dhyaan rakhna h ye sirf original value dega


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);   //agar key aur value ko alag alag print krna ho toh
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {  //yaha pe ye kaam nhi krega
//     console.log(key, ':-', value);
    
// }