const p1 = Promise.reject("Error 1");  3
const p2 = Promise.reject("Success"); 1
const p3 = Promise.reject("Error 2"); 2
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.errors[0]);
  });