//declare string 
let name = "Suman";
let city ='Bhopal';
let state= `MP`;

//length
console.log("suman".length);
//trim

console.log("  suman kumar  ".trim());
//trimstart
console.log("   kumar   ".trimStart());
//trimend
console.log("   suman   ".trimEnd());
//slicestart
console.log("Javascript".slice(0, 4));

//sliceend
console.log("suman".slice(-3));

//includes
console.log("hello".includes("lo"));

//indexOf;;
console.log("javascript".indexOf("script"));

//slice
console.log("Javascript".slice(0, 4));

//substring
console.log("JavaScript".substring(4, 10));
//replace
console.log("Suman".replace("Suman", "Suman kumar"));

//repeat
console.log("Hi ".repeat(3));

//template literals
let n = "Suman";
console.log(`My name is ${name}`);

//split  convert string to array
let s= "javascript "
console.log(s.split(""));
//join convert array to string
let sn= ["javascript","is"];
console.log(sn.join(" "));


let se = "banana";
let check = "c";
let temp = 0;
for (let c of se) {
  if (c === check) {
    temp++;
  }
}
console.log(temp);

let namee = `
Line 1
line 2
`;
console.log(namee);

console.log(String("123"));

console.log("45".toString(), typeof "45");

// filter practise 
let a=[1,2,3,2,3,4,5,4]
// find unique elements in array
let uniqu=[...new Set(a)]
console.log(uniqu);

let unique = a.filter((item,index)=>{
  return a.indexOf(item)===index
});
console.log(unique)

// find even numbers
console.log(a.filter(num=>num%2==0))
//find odd numner
console.log(a.filter(num=>num%2 !=0))
// /filter in object 
let users = [
  {name:"A", age:17},
  {name:"B", age:22},
  {name:"C", age:16},
  {name:"D", age:19}
];
console.log(users.filter(num=>num.age>18))
//find >4
let words = ["hi","hello","code","javascript","js"];
let more =words.filter(word=>word.length>4)
console.log(more)
//filter false
let arr = [0, 1, false, 2, "", 3, null, undefined];
console.log((arr.filter(fa=>fa)))







