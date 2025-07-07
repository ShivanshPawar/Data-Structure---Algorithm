let prompt = require("prompt-sync")({sigint:true}); //install node packages

let n = Number(prompt("Enter a number : "));

for(let i=1;i<=n;i++){
    for(let j=1;j<=n;j++){
        process.stdout.write("* ");
    }
    console.log();
}

console.log();

for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write("* ");
    }
    console.log();
}

console.log();

for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        process.stdout.write(j+" ");
    }
    console.log();
}

// console.log();

// let temp = n;
// for(let i=1;i<=n;i++){
//     for(let j=1;j<=temp;j++){
//         process.stdout.write("* ");
//     }
//     console.log();
//     temp--;
// }

console.log();

for(let i=1;i<=n;i++){
    for(let j=1;j<=n-i+1;j++){
        process.stdout.write("* ");
    }
    console.log();
}