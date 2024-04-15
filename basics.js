// function add(a,b){
//     return a+b;
// }
// console.log(add(1,2));

const add=(a,b)=>{
    return a+b;
}
console.log(add(1,2));

const name="user name";
console.log("name:",name);
console.log(`name:${name}`);

//Destructuring
const user={
    name:"username",
    age:12,
    gender:"male",
}
console.log(user.name);
const {age}=user;
console.log(age);
const numbers=[1,2,3,4];
const numbersToTen=[...numbers,4,5,...numbers]
console.log(numbersToTen);

