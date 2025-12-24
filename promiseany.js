// const p1 = Promise.reject("Error 1");  
// const p2 = Promise.reject("Success"); 
// const p3 = Promise.reject("Error 2"); 
// Promise.any([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

let res = fetch("https://jsonplaceholder.typicode.com/posts/");
res
  .then((data) => {
    return data.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });