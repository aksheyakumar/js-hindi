// const coding = ["js", "ruby", "java", "python", "cpp"]


// const values = coding.forEach( (item) => {
//     //console.log(item);
//     return item
// } )

// console.log(values);  // ye kabhi bhi kuch return nhi krega toh isme undefine hi print hoga

// const mynums = [1,2,3,4,5,6,7,8,9,10]

// const newnums = mynums( (num) => {
//     return num>3
// } )  // {} hum ye use krte h toh return use krna hoga agar seedha hi likh dete h toh kuch bhi(return) use nhi krna hoga

// console.log(newnums);

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userbook = books.filter( (ti) => ti.publish > 2000)
  userbook = books.filter((bk)=> {
    return bk.genre === "fiction"
  })
  console.log(userbook);
  
