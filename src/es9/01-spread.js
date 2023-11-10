const user = {userName: "gndx", age: 34, country: "CO"};
const { userName, ...values } = user;
console.log(userName);
console.log(values);