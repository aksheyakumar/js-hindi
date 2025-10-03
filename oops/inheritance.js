class User {
    constructor(username){
        this.username = username
    }
    logme(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class teacher extends User{
    constructor(username,email,password){
        super(username) // .call ki jagah ye use kr skte h aur ye this wagera apne aap hi lga deta h
        this.email = email
        this.password = password
    }

    addcourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new teacher("chai","chai@teacher.com","123")

chai.addcourse()
chai.logme()
const masalaChai = new User("masalaChai")

masalaChai.logme()  //iske pass sirf user  ka access h naa ki teacher ka nhi h


console.log(chai instanceof User);
console.log(chai instanceof teacher);//iska mtlb h ki ye iska instance h ki ye kaha se aaya h
