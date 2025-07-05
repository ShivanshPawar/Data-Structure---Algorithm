const prompt = require('prompt-sync')({ sigint: true });

let mName = prompt("Enter a movie name : ");
let rating = Number(prompt("Enter a rating : "));

let message = ""
if (rating >= 0 && rating <= 5) {
    if (rating >= 4.6 && rating <= 5.0) message = "Super Hit";
    if (rating >= 3.5 && rating <= 4.5) message = "Hit";
    if (rating >= 2.1 && rating <= 3.4) message = "Semi-Hit";
    if (rating >= 0.0 && rating <= 2.0) message = "Flop";
    console.log(`${mName} is a ${message}.`);
} else {
    console.log("Please Enter Valid Ratings!");
}