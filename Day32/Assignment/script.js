let prompt = require("prompt-sync")({ sigint: true });


// ISBN (Not completed ❌)
// let n = prompt("Enter a ISBN number : ");
// let sum = 0
// for(let i = 0;i<n.length;i++){
//     sum += n[i] * i; //307
// }
// if(sum/n === 0) console.log("Valid ISBN");
// else console.log("Invalid ISBN");





// Harshad Number (Completed ✅)
let n = prompt("Enter a Number : ");
let sum = 0;
for (let i = 0; i < n.length; i++) {
    sum += n[i] * 1;
}
if (n % sum === 0) console.log(`${n} is Harshad Number`);
else console.log(`${n} is not Harshad Number`);





