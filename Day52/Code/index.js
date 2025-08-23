let prompt = require('prompt-sync')({ sigint: true });

// for(let i = 0;i<=123;i++){
//     process.stdout.write(String.fromCharCode(i)+" ")
// }


// This code counts the frequency of each character in a given string and prints the results.
// let s = prompt("Enter a string : ")
// let freqArr = new Array(123).fill(0);

// for(let i = 0; i<s.length;i++){
//     let ascii = s.charCodeAt(i)
//     freqArr[ascii] = freqArr[ascii]+1;
// }

// for(let i=0; i<freqArr.length;i++){
//     if(freqArr[i]>0){
//         console.log(String.fromCharCode(i)+" -> "+freqArr[i]);
//     }
// }



let str1 = prompt("Enter your 1st string : ");
let str2 = prompt("Enter your 2nd string : ");
let freqArr = new Array(123).fill(0);
let isAnagram = true;

if (freqArr > 0) {
    console.log("Strings are not anagram")
} else {
    for (let i = 0; i < str1.length; i++) {
        let ascii = str1.charCodeAt(i);
        freqArr[ascii] = freqArr[ascii] + 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let ascii = str2.charCodeAt(i);
        freqArr[ascii] = freqArr[ascii] - 1;
    }
}

