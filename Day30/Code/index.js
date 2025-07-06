let prompt = require("prompt-sync")({ sigint: true });

// let n = Number(prompt("Enter a number : "));

// Print "Hello World" n times
// for(let i = 1;i<=n;i++){
//     console.log("Hello World!");
// }

// Print natural numbers up to n
// for(let i=1;i<=n;i++){
//     console.log(i);
// }


// Reverse loop from n to 1
// for(let i=n;i>=1;i--){
//     console.log(i);
// }


// Print multiplication table
// for(let i=1;i<=10;i++){
//     console.log(`${n} * ${i} = ${n*i}`);
// }

// Sum of n numbers
// let sum = 0;
// for(let i=1;i<=n;i++){
//     sum += i
// }
// console.log(sum);


// Factorial of a number
// fact = 1;
// for(let i=1;i<=n;i++){
//     fact *= i
// }
// console.log(fact);

// Sum of even and odd numbers in a range
// evenSum = 0;
// oddSum = 0;
// for(let i=1;i<=n;i++){
//     if(i%2==0){
//         evenSum += i;
//     }else{
//         oddSum += i;
//     }
// }
// console.log("sum of all even number is "+evenSum);
// console.log("sum of all odd number is "+oddSum);


// Print all factors of a number
// for(let i=1;i<=n/2;i++){
//     if(n%i==0) console.log(i);
// }
// console.log(n)

// Check if a number is prime
// let isPrime = true;
// for (let i = 2; i <= n / 2; i++) {  // 
//     if (n % i == 0) {
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime) console.log("prime number");
// else console.log("Not a prime number");

// second approach
// let isPrime = isPrimeFun(n);
// if(isPrime) console.log("Prime Number");
// else console.log("Not Prime");

// third approach
// function isPrimeFun(n){
//     if(n<=1) return false;
//     if(n==2) return true;
//     if(n%2==0) return false;
//     for(let i=3;i<= Math.floor(Math.sqrt(n));i+=2){
//         if(n%i==0) return false;
//     }
//     return true;
// }

// Calculate a^b (power)
let num1 = Number(prompt("Enter first number : "));
let num2 = Number(prompt("Enter second number : "));
let ans = Math.pow(num1,num2);
console.log(`${num1}^${num2} = ${ans}`);