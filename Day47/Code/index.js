prompt = require('prompt-sync')({sigint:true});



// Start Learning "String" in JavaScript


// let s = "hello world!";
// console.log(s);
// console.log(s[6]);
// console.log(s[0]);

// s[5] = "x"; // immutable in nature
// console.log(s);

// let name = 'john';
// name = 'doe';
// console.log(name);

// let s = "something";
// let str = " what's happening ";
// console.log(s);

// console.log(s.length);

// console.log(s.substring(4));
// console.log(s.substring(0,4));

// console.log(s.slice(3));
// console.log(s.slice(-3,s.length));
// console.log(s.slice(-3));

// console.log(s.toUpperCase());
// console.log(s.toLowerCase());

// console.log(s.concat(" is ","happening"));

// console.log(str.trim());

// console.log(s.indexOf("i"));

// console.log(s.includes("some"));
// console.log(s.includes("nothing"));

// console.log(s.startsWith("some"));
// console.log(s.startsWith("me"));

// console.log(s.endsWith("thing"));
// console.log(s.endsWith("me"));

// let str1 = "I love Designing";
// console.log(str1);
// console.log(str1.replace("Designing","Coding"));

// let str2 = 'a b c a b c a';
// console.log(str2.replaceAll("a","*"));

// console.log(str2.split(" "));

// console.log(str1.charAt(0));

// console.log(str1.charCodeAt("I"));






let str = prompt("Enter a string : ");

for(let i=0;i<str.length;i++){
    console.log(str[i]);
}

let revStr = "";
for(let i=str.length;i>=0;i--){
    revStr += str.charAt(i);
}

console.log(revStr);