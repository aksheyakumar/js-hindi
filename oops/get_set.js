class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    //ye values ko overwrite krne k liye kaam aata h
    //get kaam aata  h value ko get krne k liye
    //set kaam aata h value ko set krne k liye

    get email(){  // getter me humesha hi return use krna hi hoga
        return this._email.toUpperCase()  // agar hum _ nhi lgyenge toh constructor aur setter ke beech hod lg jaayegi jiske uski value ka kuch nhi hoga error aayega isko race conditon bolte h
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}hitesh`
    }

    set password(value){
        this._password = value
    }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.email);