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



// let str1 = prompt("Enter your 1st string : ");
// let str2 = prompt("Enter your 2nd string : ");
// let freqArr = new Array(123).fill(0);

// if (str1.length != str2.length) {
//     console.log("Given strings are not anagram")
// }
// else {
//     let isAnagram = true;
//     for (let i = 0; i < str1.length; i++) {
//         let ascii = str1.charCodeAt(i);
//         freqArr[ascii] = freqArr[ascii] + 1;
//     }

//     for (let i = 0; i < str2.length; i++) {
//         let ascii = str2.charCodeAt(i);
//         freqArr[ascii] = freqArr[ascii] - 1;
//     }

//     for(let i = 0;i<freqArr.length;i++){
//         if(freqArr[i]!=0){
//             isAnagram = false;
//             break;
//         }
//     }

//     if(isAnagram) console.log("Given strings are anagram");
//     else console.log("Given strings are not anagrma");
// }





// Now start learning Set 
// Set is a collection of unique values
// It can hold any value, whether primitive or reference
// The values in a Set are unordered

// let set = new Set();

// set.add(10)
// set.add(20)
// set.add(30)
// set.add(10)
// set.add(10)
// set.add(40)
// set.add(50)
// set.add(30)
// set.add(40)

// console.log(set)
// console.log(set.size)
// console.log(set.delete(20));
// console.log(set);
// console.log(set.has(30));
// for(let i of set){
//     console.log(i);
// }
// set.clear();
// console.log(set);


// Check if panagram or not
// A pangram is a sentence that contains every letter of the alphabet at least once.
let str = prompt("Enter a String : ")
let set = new Set();
for(i=0;i<str.length;i++){
    let ch = str.charAt(i);
    set.add(ch);
}
if(set.size===26) console.log("Given string is panagram");
else console.log("Given string is not panagram");