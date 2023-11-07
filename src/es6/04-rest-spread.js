//Arrays destructuring

let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, fruits[1]);

//Object destructuring

let user = {userName: "Oscar", age: 34};
let {userName, age} = user;
console.log(userName, user.age);