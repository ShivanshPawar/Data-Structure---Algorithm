let prompt = require('prompt-sync')({ sigint: true });



// Array Left Rotation by K Elements (1st method)
// let k = Number(prompt("Enter a number : "));
// let arr = [1,2,3,4,5];
// console.log(arr);

// k = k % arr.length;
// for(let j=1;j<=k;j++){
//     let copy = arr[0];
//     for(let i=0;i<arr.length-1;i++){
//         arr[i] = arr[i+1];
//     }
//     arr[arr.length-1] = copy;
// }
// console.log(arr);



// Array Left Rotation by K Elements (2nd method)
// let arr = [1, 2, 3, 4, 5];
// let temp = new Array(arr.length);
// let k = Number(prompt("Enter a number : "));
// k = k % arr.length;

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     temp[i] = arr[(i+k)%arr.length];
// }
// console.log(temp);



// Array Left Rotation by K Elements (3rd method)
// let arr = [1, 2, 3, 4, 5];
// let k = Number(prompt("Enter a number : "));
// k = k % arr.length;

// reverse(arr , 0 ,k-1)
// reverse(arr , k ,arr.length-1)
// reverse(arr , 0 ,arr.length-1)

// console.log(arr);
// function reverse(arr , i , j){
//     while(i<j){
//         let temp = arr[i];
//         arr[i] = arr[j];
//         arr[j] = temp;
//         i++;
//         j--;
//     }
// }

// Array Right Rotation by K Elements 


// Linear Search in an Array
// let target = Number(prompt("Enter a target value : "));
// let arr = [13,43,54,76,543,34,32,20];
// let index = -1;
// for(let i = 0;i<arr.length;i++){
//     if(arr[i] == target){
//         index = i;
//         break;
//     }
// }

// if(index == -1) console.log("Element Not Found!");
// else console.log(`Element Found at ${index} index`);



// Binary Search in a Sorted Array
let arr = [21,32,54,65,76,87,124,200];
let target = Number(prompt("Enter target Element : "));
function BinarySearch(arr, target){
    let s = 0, e = arr.length-1;
    while(s<=e){
        let mid = Math.floor((s+e)/2);
        if(arr[mid] == target) return mid;
        else if(arr[mid]>target) e = mid -1;
        else s = mid + 1;
    } 
    return -1;
}

if(BinarySearch(arr,target)=== -1) console.log("Elem Not Found");
else console.log("Element Found");