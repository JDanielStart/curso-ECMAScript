//Declarando una clase
class User {

};

//Haciendo una instancia de una clase
const newUser = new User();

class user {
    //Métodos
    greeting() {
        return "Hello";
    }
};

const gndx = new user();

console.log(gndx.greeting());

const developer = new user();
console.log(developer.greeting());

//Constructor
class user {
    //Constructor
    constructor() {
        console.log("Nuevo Usuario");
    }
    greeting() {
        return "Hello";
    }
}

const david = new user();

//This
class user {
    constructor(name) {
        this.name = name;
    }
    //metodos
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}

const juan = new user("juan");
console.log(juan.greeting());

// setters and getters
class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //métodos
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get uAge() {
        return this.age;
    }
    set uAge(n) {
        this.age = n;
    }
}

const developer1 = new user("David", 15);
console.log(developer1.uAge);
console.log(developer1.uAge = 20);
console.log(developer1.name);
