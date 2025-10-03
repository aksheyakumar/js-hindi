class User {
    constructor(username) {
        this.username = username
    }

    logme(){
        console.log(`username : ${this.username}`);
    }

    static createId(){ // iska mtlb h ki hrr koi isko use nhi kr paayega
        return '123'
    }
}

const hitesh = new User("aksheya")
console.log(aksheya.createId());


class teacher extends User {
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new teacher("iphone","i@iphone.com")
console.log(iphone.logme()); //ye bhi createdId ko access nhi kr paayega