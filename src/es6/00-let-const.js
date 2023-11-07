var lastName = "David"; //Declarar y asignar
lastName = "Oscar"; //Reasignar
console.log(lastName);

let fruit = "Apple"; //Declarar y asignar
fruit = "Kiwi"; //Reasignar
console.log(fruit);

const animal = "Dog"; //Declarar y asignar
animal = "Cat"; //Reasignar
console.log(animal);

const fruits = () =>  {
    if (true) {
        var fruit1 = "Apple"; //function scope
        let fruit2 = "Kiwi"; //block scope
        const fruit3 = "Banana"; //block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();
