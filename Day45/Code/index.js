let prompt = require("prompt-sync")({ sigint: true });

// let arr = [
//     [1,2,3],
//     [4,5,6],
//     [7,8,9]
// ]

// // Matrix Creation
// let size = Number(prompt("Enter a number : "));
// let arr = new Array(size);
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = new Array(size);
//     for (let j = 0; j < arr[i].length; j++) {
//         arr[i][j] = Math.floor(Math.random() * 100)
//     }
// }

// // Display Matrix
// for (i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         process.stdout.write(`${arr[i][j]}  `);
//     }
//     console.log("")
// }

// // // Transpose Matrix
// // let ans = Array.from({ length: arr[0].length }, () => Array(arr.length));
// // for (let i = 0; i < ans.length; i++) {
// //     for (let j = 0; j < ans[i].length; j++) {
// //         ans[i][j] = arr[j][i];
// //     }
// // }

// // console.log("----------")

// // // Display TM
// // for (i = 0; i < ans.length; i++) {
// //     for (let j = 0; j < ans.length; j++) {
// //         process.stdout.write(`${ans[i][j]}  `);
// //     }
// //     console.log("")
// // }


// // // In Place Transpose Matrix
// // for (let i = 0; i < arr.length; i++) {
// //     for (let j = i; j < arr[i].length; j++) {
// //         let temp = arr[i][j];
// //         arr[i][j] = arr[j][i];
// //         arr[j][i] = temp
// //     }
// // }

// // console.log("----------")

// // // Display In Place TM
// // for (i = 0; i < arr.length; i++) {
// //     for (let j = 0; j < arr.length; j++) {
// //         process.stdout.write(`${arr[i][j]}  `);
// //     }
// //     console.log("")
// // }


// // Rotate Image
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr[i].length; j++) {
//         let temp = arr[i][j];
//         arr[i][j] = arr[j][i];
//         arr[j][i] = temp
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     let k= 0 , j= arr[i].length-1;

//     while(k<j){
//         let temp = arr[i][k];
//         arr[i][k] = arr[i][j];
//         arr[i][j] = temp;
//         k++;
//         j--
//     }
// }

// console.log("----------")


// for (i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         process.stdout.write(`${arr[i][j]}  `);
//     }
//     console.log("")
// }


