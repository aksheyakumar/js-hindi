const coding = ["js","ruby","cpp","java","python"]

coding.forEach( function (lang){
    console.log(lang);
    
})

//using arrow function

// coding.forEach( (item) => {
//     console.log(item);
    
// } )

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

coding.forEach( (item , index, arr) => {  // isme saare mepura array print hoga
    console.log(item,index,arr);
    
} )

const mycoding = [{
    languageName:"javascript",
    languagefilename:"js"
},
{
    languageName:"java",
    languagefilename:"java"
},
{
    languageName:"python",
    languagefilename:"py"
},]

mycoding.forEach( (item) =>{
  console.log(item.languagefilename);
} )