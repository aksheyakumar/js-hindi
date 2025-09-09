const score = 400
console.log(score);

const balance = new Number(234)  //ye object ki tarah treat hoga
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));

const alagNumber = 123.45567

console.log(alagNumber.toPrecision(4));

const thousands = 21000993458
console.log(thousands.toLocaleString('en-IN'));


//+++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++

console.log(Maths);
console.log(Maths.abs(-234)); //ye negative value ko positive bna deta h pr positive value ko negative nhi bnata
console.log(Maths.round(3.65));
console.log(Maths.ceil(3.1));
console.log(Maths.floor(4.9));
console.log(Maths.min(2,3,5,46));
console.log(Maths.max(2,34,54,6));

console.log(Maths.random()); //ye 0 or 1 ke beech me number deta h
console.log((Maths.random()*10)+ 1); // agar value 1 se upar chahiye
console.log(Maths.floor(Maths.random()*10) +1);

const min = 10;
const max = 20;

console.log(Maths.floor(Maths.random() * (max - min +1)) + min); // iska mtlb ye hua ki minmum value se toh upar hi value aana chahiye







 



