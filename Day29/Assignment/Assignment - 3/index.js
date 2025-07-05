let prompt = require('prompt-sync')({ sigint: true });

let g = prompt("Enter your gender : ");
let yos = Number(prompt("Enter year of service : "));
let q = prompt("Enter qualifications : ");

let salary = 0;

if (g == "Male") {
    if (yos >= 10 && q == "Post-Graduate") {
        salary = 15000;
    } else if (yos >= 10 && q == "Graduate") {
        salary = 10000;
    } else if (yos < 10 && q == "Post-Graduate") {
        salary = 10000;
    } else if (yos < 10 && q == "Graduate") {
        salary = 7000;
    } else {
        console.log("invalid information");
    }

    console.log("Your Salary will be : " + salary);

} else if (g == "Female") {
    if (yos >= 10 && q == "Post-Graduate") {
        salary = 12000;
    } else if (yos >= 10 && q == "Graduate") {
        salary = 9000;
    } else if (yos < 10 && q == "Post-Graduate") {
        salary = 10000;
    } else if (yos < 10 && q == "Graduate") {
        salary = 6000;
    } else {
        console.log("invalid information");
    }
    console.log("Your Salary will be : " + salary);

} else {
    console.log("invalid information");
}
