prompt = require('prompt-sync')({ sigint: true });

//  Q 57. Pallindromic String using Two pointer algorithm (hint: Array reverse algo)
// Two pointer algorithms for palindrome
// let s = prompt("Enter a String : ");
// let isPalindrome = true;
// let i = 0, j = s.length - 1;

// while (i < j) {
//     if (s[i] != s[j]) {
//         isPalindrome = false;
//         break;
//     }
//     i++;
//     j--;
// }

// if (isPalindrome) console.log(`${s} is palindrome.`);
// else console.log(`${s} is not palindrome.`);






// Toggle strings
// let s = prompt("Enter a String : ");
// console.log(s);

// let ans = "";

// for(let i = 0;i < s.length;i++){
//     let asci = s.charCodeAt(i);
//     if(asci>=65 && asci<=90){
//         ans += String.fromCharCode(asci+32)
//     }
//     else if(asci>=97 && asci <= 122){
//         ans += String.fromCharCode(asci-32)
//     }else{
//         ans = "Make sure you enter a strings only."
//     }
// }

// console.log(ans);





// Pre Find
//  let words = ["attention","people","attire","hello","attend"];
//  let s = "at";
//  let count = 0; 
//  for(let i = 0;i<words.length;i++){
//     if(words[i].startsWith(s)) count++;
//  }

//  console.log(count);







let s = prompt("Enter a string : ");
let ans = "";
let arrStr = s.split(" ");
for(let i=0;i<arrStr.length;i++){
    let word = arrStr[i];
    if(word.length<=2) ans += word.toUpperCase()+" ";
    else{
        ans += word.charAt(0).toUpperCase()
             + word.substring(1,word.length-1)
             + word.charAt(word.length-1).toUpperCase()+" ";
    }
}

console.log(ans);