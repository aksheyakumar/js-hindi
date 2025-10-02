//agar kisika reference ko hold krke rakhna h toh hum .call ka use krte h
function setusername(username) {
    this.username = username
    console.log("called") //ye called toh ho rha h pr jab bhi program execute ho rha h toh iska call execution htt jaa rha h toh iske liye hum ye this ka use nhi krenge jaha se calll ho rha h uska this use krenge
}

function createuser(username,email,password){
    setusername.call(this.username) //iska mtlb hua ki vo toh gya uska duniya se uska samaan m rakh lunga
    this.email = email
    this.password = password
}

const chai = new createuser("chai","chai@user.com","1234")
console.log(chai)

// call - current execution context kisi aur function ko pass krdeta h