const name = "aksheya kumar"
const repoCount = 2

// console.log((name + repocount + " value")); ye nhi krna chahiye neeche wala use kro

console.log(`hello kya haal chaal ${name} and merirepo h ${repoCount}`);

const gameName = new String('devil')


console.log(gameName[0]); //d aayega

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); //i
console.log(gameName.indexOf('i'));  //3


const newString = gameName.substring(0.3)  //yaha hum negative value nhi le skte
 console.log(newString);

const anotherString = gameName.slice(-4,3)
 console.log(anotherString);
 
 const kuchbhi = new String('     aksheya    ')
 console.log(kuchbhi.trim());  // ye pahale wale space aur dusre wale spaces ko milta deta h

 const url = "https://chai aur code.com/hitsh%20choudhary"
 console.log(url.replace('%20','-'));  //ye hrr ek %20 ko _ isse replace kr deta h
 console.log(url.includes('sundar')); //ye btata h ki sundar h ki nhi aapke variable me


 console.log(gameName.split('_'));  // ye array me convert krdeta h
 
 
 
