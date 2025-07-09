let prompt = require("prompt-sync")({ sigint: true });

// Array creation
// let arr = [10,20,30,40,50];
// arr[10] = 1000;
// console.log(arr[5]); // Output : undefined


// let arr = new Array(4); // size declare
// arr[0] = 10
// arr[1] = 20
// arr[2] = 30
// arr[3] = 40
// arr[4] = 50
// console.log(arr);

// let arr = new Array(4); // size declare
// arr[0] = 10
// arr[1] = 20
// arr[2] = 30
// arr[3] = 40
// arr[4] = 50     // index 5,6,7,8,9 are empty
// arr[10] = 100;  
// console.log(arr);


// Sum of Array Elements
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }

// console.log("Sum =", sum); 




// // Maximum Element in Array
// let arr = [5, 33, 93, 2, 65, 5];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log("Max =", max);




// let arr = [50, 422, 123, 833, 343];
// let max = -Infinity;
// let secondMax = -Infinity;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//         secondMax = max;
//         max = arr[i];
//     } else if (arr[i] > secondMax && arr[i] !== max) {
//         secondMax = arr[i];
//     }
// }

// console.log("Second Max =", secondMax); 