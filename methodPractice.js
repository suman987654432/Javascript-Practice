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

// rest operator
let obj = { a: 1, b: 2, c: 3 }
let { a, ...rest } = obj
console.log(a)
console.log(rest)

// Object Utility Methods
let user={ name: "suman", age: 23, city: "patna" }
console.log(Object.keys(user))
console.log(Object.values(user))
console.log(Object.entries(user))
console.log(Object.freeze(user))
user.age=24
console.log(Object.seal(user))
user.age=24
console.log(user)
delete user.city


// optional chaining
let user = {
  name: "suman",
  address: {  
    city: "patna",
    
  }
}
console.log(user?.address?.city)
console.log(user?.contact?.phone)

//practice
let user = { name: "suman", age: 23, city: "patna" };
for (let [key, value] of Object.entries(user)) {
  console.log(key+":"+value);
}


//higher order function , callback function 
function operate(a, b, fn) {
  return fn(a, b);
}
function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
console.log(operate(10, 5, add));
console.log(operate(10, 5, sub));
