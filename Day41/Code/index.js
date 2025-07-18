let prompt = require('prompt-sync')({sigint:true});

// // Bubble Sort
// let arr = [1,2,3,2,9,10];
// let n = arr.length;
// for(let i=0;i<n-1;i++){
//     for(let j=0;j<n-i-1;j++){
//         if(arr[j]>arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//         }
//     }
// }
// console.log(arr);


// Insertion Sort
// let arr = [1,4,5,9,3,10];
// for(let i=1;i<arr.length;i++){
//     let key = arr[i];
//     let j = i-1;
//     while(j>=0 && arr[j]>key){
//         arr[j+1] = arr[j];
//         j--;
//     }
//     arr[j+1] = key;
// }
// console.log(arr);


// Selection Sort
// let arr = [1,2,3,2,9,10];
// for(let i=0;i<arr.length;i++){
//     let small = i;
//     for(let j = i+1;j<arr.length;j++){
//         if(arr[small]>arr[j]){
//             small = j;
//         }
//     }
//     if(i!=small){
//         let temp = arr[i];
//         arr[i] = arr[small];
//         arr[small] = temp;
//     }
// }
// console.log(arr)


