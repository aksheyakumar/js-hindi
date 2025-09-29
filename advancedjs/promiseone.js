// Promise 1
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 1 is completed");
        resolve();
    }, 1000);
});

promiseOne.then(() => {
    console.log("Promise 1 consumed");
});

// Promise 2 (direct new Promise)
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task 2 is completed");
        resolve();
    }, 1000);
}).then(() => {
    console.log("Async 2 done promise");
});

// Promise 3 (resolving object)
const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ username: "aksheya kumar", email: "chai@example.com" });
    }, 1000);
});

promiseThree.then((user) => {
    console.log(user);
});

// Promise 4 (with error handling)
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "aksheya", password: "123" });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

promiseFour
    .then((user) => {
        console.log(user);
        return user.username; // agle .then me ye value jayegi
    })
    .then((username) => {
        console.log(username);
    })
    .catch((error) => {
        console.log(error);
    }).finally(function(){
        console.log("the promise is either resolved or rejected")
    })

const promiseFive = new Promise(function(resolve,reject){
     setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "javascript", password: "123" });
        } else {
            reject("ERROR: js went wrong");
        }
    }, 1000);
})

async function consumedpromiseFive(){
   try { const response = await promiseFive
    console.log(response);
   }
   catch (error) {
    console.log(error);
   }
}
consumedpromiseFive()

// async function getallusers() {
//     try {
//         const response = await  fetch('https://jsonplaceholder.typicode.com/users')
//         const data =  await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ",error);
//     }
// }

//getallusers()

fetch('https://jsonplaceholder.typicode.com/users').then((response)=> {
    return response.json()
}).then((data) => {
        console.log(data);
}).catch((error) => console.log(error))