// Print "Hello" repeatedly until the user chooses to stop.

let prompt = require("prompt-sync")({ sigint: true });

// let userInput;
// do {
//     console.log("Shivansh");
//     userInput = prompt("Do you want to continue yes/no : ").toLowerCase();
// } while (userInput === 'yes');


// Guess the Number 🎲
// let com = Math.floor(Math.random() * 100 + 1);
// let userInput;
// do {
//     userInput = Number(prompt("Enter number in B/W 1-100 : "))
//     if (isNaN(userInput) || userInput < 0 || userInput > 100) {
//         console.log("please enter valid number");
//         continue
//     }

//     if (userInput > com) console.log("too high , try again");
//     else if (userInput < com) console.log("too low ,try again");
//     else if (userInput === com) console.log("Congrates 🎉 guessed number is : " + com);
// } while (userInput !== com);




// // Sasta Calculator 🧮

// let input;

// do{
//     let n1 = Number(prompt("Enter a first Number : "))
//     let n2 = Number(prompt("Enter a second Number : "))
//     let operator = prompt("Enter valid operator (+,-,*,/) : ")
//     switch(operator){
//         case '+':
//             console.log(`result : ${n1 + n2}`);
//             break;
//         case '-':
//             console.log(`result : ${n1 - n2}`);
//             break;
//         case '*':
//             console.log(`result : ${n1 * n2}`);
//             break;
//         case '/':
//             if(n2 !== 0) console.log(`result : ${n1 / n2}`);
//             else console.log("please Enter valid number");
//             break;
//         default:
//             console.log("please Enter valid operator")
//     }

//     input = prompt("Calculate again yes/no : ").toLowerCase();

// }while(input === "yes");






