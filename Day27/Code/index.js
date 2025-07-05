// sum of two numbers

let prompt = require("prompt-sync")({sigint:true});

// let a = Number(prompt("Enter first number : "));
// let b = Number(prompt("Enter first number : "));

// console.log(a+b);

// let a = 20;
// let b = "hello"; //concatenation
// console.log(a+b);

// let a = 10;
// let b = 20;

// // console.log("sum of "+a+" and "+b+" is "+b);    // learn bodmas if you don't no

// console.log(5+"5")  // + operator perform two operations addition(if both are number) and concatenation(if one of them string) 
// console.log(5-"5")  //type coercion (with all other operator its convert type automatically)
// console.log(5*"5")  
// console.log(5/"5")  
// console.log(5%"5")  

// let age = Number(prompt("Enter a age : "));     // get input from user
// console.log(age)

// let a = 10;
// let b = 20;

// with third variable 
// let temp = a;
// a = b;
// b = temp;

// without third variable
// a = a + b;
// b = a - b;
// a = a - b;

// destructuring method
// [a,b] = [b,a];
// console.log(a,b);


// arithmetic operator

// console.log(10+20); //30
// console.log(10-20); //-10
// console.log(10*20); //200
// console.log(Math.floor(10/20)); //0 (use Math.floor for best practices because js returns floating value )
// console.log(10%20); //10

// relational operator
// console.log(10>10); //false
// console.log(10<10); //false
// console.log(10>=20);    //false
// console.log(10<=20);    //true
// console.log(10=="10");  //true
// console.log(10==="10"); //false  (strictly checked with datatype)

// logical operator
// console.log(10>5 && 10==20) //returns true if both condition are true
// console.log(10>5 && 10==10) 
// console.log(10>5 || 10==20) // returns true if one of them are true 
// console.log(10!=10) // when condition are true it returns false and so on ! 

// unary operator 
let  a = 10;
console.log(++a); //11

console.log(a++); //prints 11  than 11+1
console.log(a); //12

console.log(--a); //11

console.log(a--); //prints 11  than 11-1
console.log(a); //10


console.log(10++); //syntax error
