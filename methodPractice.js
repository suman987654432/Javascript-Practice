//Extra spaces remove
let str3 = "  hello   world   js  ";
console.log(str3.trim().replace(/\s+/g,' '));
//Reverse words
let n = "Hello world js";
console.log(n.split(" ").reverse().join(" "))

//chnage string _ into space
let str = "JS_is_very_easy";
console.log(str.split("_").join(" "))

//check plaindrome
let p="sad"
console.log(p.split("").reverse().join("")==p)

//count words in a sentence
let str2 = "  Learn   JavaScript   step by step  ";
console.log(str2.trim().split(" ").filter(Boolean).length)

//capitalize 
let str1 = "suman kumar";
let result = str1
  .split(" ")
  .map(word => word[0].toUpperCase() )
  .join(" ");

console.log(result);
