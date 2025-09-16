// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularuser = {
    email: "akshaygurjar@gmail.com",
    fullname:{
        userfullname:{
            firstname:"aksheya ",
            lastname:"kumar"
        }
    }
}

console.log(regularuser.fullname.userfullname.firstname);

const obj1 = {1:w,2:f}
const obj2 = {3:de,4:re}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2)

const ob3 = {...obj1,...obj2}
console.log(ob3);

const users = [
    {
        id:1,
        email:"akshaygurjar@gmail.com"
    },
        {
        id:1,
        email:"akshaygurjar@gmail.com"
    },
        {
        id:1,
        email:"akshaygurjar@gmail.com"
    },
]
users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasownproperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh choudhary"
}

// course.courseInstructor

const {courseInstructor: master} = course

// console.log(courseInstructor);
console.log(master);

{
    "name":"aksheya",
    "course":"js in hindi",
    "fees":"free"
}

[
    {},
    {},
    {}
]
