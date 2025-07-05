const prompt = require('prompt-sync')({ sigint: true });

// console.log("Something....");

// console.log(Math.ceil(10.1));
// console.log(Math.floor(10.1));
// console.log(Math.round(10.1));
// console.log(Math.trunc(10.1));
// console.log(Math.max(10,45,65,42,76));
// console.log(Math.min(10,45,65,42,76));
// console.log(Math.abs(10.1));


// compound interest
// let p = Number(prompt("Enter principle : "));
// let r = Number(prompt("Enter a rate : "));
// let t = Number(prompt("Enter a time : "));

// let ci = p*(Math.pow(1+r/100),t) - p;
// console.log(ci);


// generate OTP
// console.log(Math.floor(Math.random()*9000+1000))


// Area of Triangle (Heron’s Formula)

// let a = Number(prompt("Enter a side 1 : "));
// let b = Number(prompt("Enter a side 2 : "));
// let c = Number(prompt("Enter a side 3 : "));


// if(a+b<=c || a+c<=b || c+b<=a){
//     console.log("Not possible")
// }else{
//     let s = (a+b+c)/2;
//     console.log(Math.sqrt(s*(s-a)*(s-b)*(s-c)));
// }


// Circumference of Circle

// let r = Number(prompt("Enter radius : "));
// console.log(2*Math.PI*r)

// conditional

// greatest number
// let a = Number(prompt("Enter 1st number : "));
// let b = Number(prompt("Enter 2nd number : "));
// if(a>b) console.log(`${a} is greatest`);
// else console.log(`${b} is greatest`);


// even-odd
// let num = Number(prompt("Enter a number : "));
// if(num%2==0) console.log("Even");
// else console.log("Odd");

// valid voter
// let age = Number(prompt("Enter your age : "));
// let Name = prompt("Enter your name : ");

// if(age>=18) console.log(`${Name} ya , you are a valid voter`);
// else console.log(`${Name} No , you are not a valid voter`)


// Greatest between three num

// let num1 = Number(prompt("Enter 1st number : "));
// let num2 = Number(prompt("Enter 2nd number : "));
// let num3 = Number(prompt("Enter 3rd number : "));

// console.log(Math.max(num1,num2,num3));

// if(num1>num2&&num1>num3) console.log(num1);
// else if(num2>num3) console.log(num2);
// else console.log(num3)


// leap year
let year = Number(prompt("Enter a year : "));

if((year%4===0 && year%100!==0)||year%400===0){
    console.log("leap year")
}else{
    console.log("Not a leap year")
}