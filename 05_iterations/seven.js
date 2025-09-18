const mynumber = [1,2,3,4,5,6,7,8,9,10]

// yaha pr bhi same kahani h agar scope{} use kiya h toh return use krna hoga

// const newnums = mynumber.map((num)=> num+12)


const newnums = mynumber
                .map((num)=> num*12)
                .map((num)=> num+13)
                .filter((num)=> num>24)

console.log(newnums);

