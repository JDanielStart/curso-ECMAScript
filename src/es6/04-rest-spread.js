//Arrays destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

//Object destructuring

let user = {userName: "Oscar", age: 34};
let {userName, age} = user;
console.log(userName, user.age);

//Spread operator

let person = {name: "oscar", age: 28};
let country = "MX";

let data = { id: 1, ...person, country };
console.log(data);

//Rest

function sum(num, ...values) {
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}

sum(1, 1, 2, 3);