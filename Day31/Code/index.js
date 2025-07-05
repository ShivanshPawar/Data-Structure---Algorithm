let prompt = require("prompt-sync")({ sigint: true });

// let n = Number(prompt("Enter a number : "));

// let sum = 0;

// while (n>0) {
//     let rem = n%10
//     sum += rem;
//     n = Math.floor(n/10);
// }

// console.log(sum);

// let rev = 0;

// while(n>0){
//     let rem = n%10
//     rev = (rev * 10) + rem;
//     n = Math.floor(n/10)
// }

// console.log(rev); 

// Automorphic number => An Automorphic number (also called a Curious number) is a number whose square ends with the same digits as the number itself.
// Real-Life Analogy (Fun Fact):
// Think of it like your name at the end of your email address — if the email ends with your name, it’s automorphic!
// let copy = n;
// let count = 0;
// let sq = n*n;
// while (n > 0) {
//     count++;
//     n = Math.floor(n / 10);
// }

// if(sq%Math.pow(10,count)== copy) console.log("Automorphic Number");
// else console.log("Not Automorphic Number")

// let x = 1;
// while (true) {
//     console.log(x);
//     x++;
//     if(x>3) break;
// }