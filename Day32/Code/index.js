// Print "Hello" repeatedly until the user chooses to stop.

let prompt = require("prompt-sync")({ sigint: true });

let userInput;
do {
    console.log("Shivansh");
    userInput = prompt("Do you want to continue yes/no : ").toLowerCase();
} while (userInput === 'yes');



