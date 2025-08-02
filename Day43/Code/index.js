prompt = require('prompt-sync')({ sigint: true });

// MultiDimentional array

// let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ]

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         process.stdout.write(`${arr[i][j]} `);
//     }
//     console.log();
// }



// Matrix creation
let size = Number(prompt("Enter a size : "));
let arr = new Array(size);

for (i = 0; i < arr.length; i++) {
    arr[i] = new Array(size);
    for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = Math.floor(Math.random()*100);
    }
}


// Prints the matrix
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        process.stdout.write(`${arr[i][j]}  `);
    }
    console.log();
}


// Diagonal Sum
leftSum = 0, rightSum = 0;

for (i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if (i == j) leftSum += arr[i][j];
        if (i + j === arr.length - 1) rightSum += arr[i][j];
    }
}

console.log(`left diagonal sum : ${leftSum} & right diagonal sum : ${rightSum}`);



