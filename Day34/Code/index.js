let prompt = require("prompt-sync")({ sigint: true });

let n = Number(prompt("Enter a number : "))

// for(i=1;i<=n;i++){
//     let temp = 65;
//     for(j=1;j<=i;j++){
//         process.stdout.write(String.fromCharCode(temp)+" ")
//         temp++;
//     }
//     console.log();
// }

// for(i=1;i<=60000;i++){
//     process.stdout.write(String.fromCharCode(i+" "));
// }

// Mirror Right Angle Triangle
console.log();
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write("  ")
    }

    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log();
}

//  Mirror Right Triangl
console.log();
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
        process.stdout.write(" ")
    }

    for (let j = 1; j <= i; j++) {
        process.stdout.write("* ")
    }
    console.log();
}

// X Pattern
console.log();
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (i === j || i + j === n + 1) {
            process.stdout.write("* ");
        } else {
            process.stdout.write("  ");
        }

    }
    console.log();
}

// V Pattern
console.log();
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= (n*2)-1; j++) {
        if (i === j || i + j === n * 2) {
            process.stdout.write("* ");
        } else {
            process.stdout.write("  ");
        }

    }
    console.log();
}



