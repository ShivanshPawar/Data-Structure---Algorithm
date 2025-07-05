let prompt = require("prompt-sync")({ sigint: true });

// let n = Number(prompt("Enter a number : "));

// for(let i = 1;i<=n;i++){
//     console.log("Hello World!");
// }

// for(let i=1;i<=n;i++){
//     console.log(i);
// }

// for(let i=n;i>=1;i--){
//     console.log(i);
// }

// for(let i=1;i<=10;i++){
//     console.log(`${n} * ${i} = ${n*i}`);
// }


// let sum = 0;
// for(let i=1;i<=n;i++){
//     sum += i
// }
// console.log(sum);

// fact = 1;
// for(let i=1;i<=n;i++){
//     fact *= i
// }
// console.log(fact);

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

// for(let i=1;i<=n/2;i++){
//     if(n%i==0) console.log(i);
// }
// console.log(n)


// let isPrime = true;
// for (let i = 2; i <= n / 2; i++) {  // 
//     if (n % i == 0) {
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime) console.log("prime number");
// else console.log("Not a prime number");

// let isPrime = isPrimeFun(n);
// if(isPrime) console.log("Prime Number");
// else console.log("Not Prime");

// function isPrimeFun(n){
//     if(n<=1) return false;
//     if(n==2) return true;
//     if(n%2==0) return false;
//     for(let i=3;i<= Math.floor(Math.sqrt(n));i+=2){
//         if(n%i==0) return false;
//     }
//     return true;
// }

// process. stdout.write()                      for ek line mai code likhne ke liye

let num1 = Number(prompt("Enter first number : "));
let num2 = Number(prompt("Enter second number : "));
let ans = Math.pow(num1,num2);
console.log(`${num1}^${num2} = ${ans}`);