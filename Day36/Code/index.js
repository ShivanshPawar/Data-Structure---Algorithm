// Reverse the array

// let arr = [1,2,3,4,5,6];
// let rev = new Array(arr.length);

// let i = 0;

// for(let j = arr.length-1;j>=0;j--){
//     rev[i] = arr[j];
//     i++;
// }
// console.log(rev);

// Reverse the array in same array
// let arr = [1,2,3,4,5,6];
// let i = 0; j = arr.length-1;

// while(i<j){
//     let temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//     i++;
//     j--;

// }

// console.log(arr)


// Move All Zeroes to Left and Ones to Right
// let arr = [1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1];
// let i = 0; j = 0;

// while (i < arr.length) {
//     if (arr[i] == 0) {
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         j++;
//     }
//     i++;
// }

// console.log(arr);


// Left Rotate the Array by 1
// let arr = [1,2,3,4,5,6];
// let temp = arr[0]

// for(let i=0;i<arr.length-1;i++){
//     arr[i] = arr[i+1];
// }
// arr[arr.length-1] = temp;

// console.log(arr);


// Right Rotate the Array by 1
let arr = [1,2,3,4,5,6];
let temp = arr[arr.length-1];

for(let i=arr.length-1;i>0-1;i--){
    arr[i] = arr[i-1];
}
arr[0] = temp;

console.log(arr);

