const prompt = require('prompt-sync')({ sigint: true });

let inr = Number(prompt("Enter an amount : "));

if(inr >= 2000){
    console.log("Note's of 2000 : "+Math.floor(inr/2000));
    inr = inr % 2000;
}
if(inr >= 500){
    console.log("Note's of 500 : "+Math.floor(inr/500));
    inr = inr % 500;
}
if(inr >= 200){
    console.log("Note's of 200 : "+Math.floor(inr/200));
    inr = inr % 200;
}
if(inr >= 100){
    console.log("Note's of 100 : "+Math.floor(inr/100));
    inr = inr % 100;
}
if(inr >= 50){
    console.log("Note's of 50 : "+Math.floor(inr/50));
    inr = inr % 50;
}
if(inr >= 20){
    console.log("Note's of 20 : "+Math.floor(inr/20));
    inr = inr % 20;
}
if(inr >= 10){
    console.log("Note's of 10 : "+Math.floor(inr/10));
    inr = inr % 10;
}
if(inr >= 5){
    console.log("Note's of 5 : "+Math.floor(inr/5));
    inr = inr % 5;
}
if(inr >= 2){
    console.log("Note's of 2 : "+Math.floor(inr/2));
    inr = inr % 2;
}
if(inr >= 1){
    console.log("Note's of 1 : "+Math.floor(inr/1));
}
