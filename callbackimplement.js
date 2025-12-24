// // Implementation using callback hell
// const cart = ["shirt", "pants", "tshirt"];
// function createOrder(cart, cb) {
//   setTimeout(() => {
//     if (cart.length === 0) {
//       console.log("Cart is Empty!!");
//       return;
//     }
//     const orderID = "ORD123";
//     console.log("Order Created");
//     console.log(orderID);
//     cb(orderID);
//   }, 2000);
// }
// function proceedtoPayment(orderID, cb) {
//   setTimeout(function () {
//     console.log("Payment done for : ", orderID);
//     cb("Payment_Success");
//   }, 1000);
// }
// function showOrderSummary(paymentInfo, cb) {
//   setTimeout(() => {
//     console.log("Order Summary shown : ", paymentInfo);
//     cb();
//   }, 1000);
// }
// function updateWallet() {
//   setTimeout(() => {
//     console.log("Wallet updated");
//   }, 3000);
// }
// createOrder(cart, function (orderID) {
//   proceedtoPayment(orderID, function (paymentInfo) {
//     showOrderSummary(paymentInfo, function (paymentInfo) {
//       updateWallet();
//     });
//   });
// });






 //USING PROMISES
let cart = ["shirt", "pants", "tshirt"];
function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (!validateCart()) {
      reject(new Error("Cart is empty"));
    }
    setTimeout(function () {
      console.log("Order created and order id is : ORD123");
      resolve("ORD123");
    }, 2000);
  });
}
function validateCart() {
  return true;
}



function proceedToPayment(orderID) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Payment Success");
      resolve("Payment_Success");
    }, 3000);
  });
}


function showOrderSummary(paymentInfo) {
  return new Promise((resolve) => {
    console.log("Order Summary shown: ", paymentInfo);
    resolve();
  });
}
function updateWallet() {
  console.log("Updated Wallet");
}



createOrder(cart)
  .then((orderID) => {
    return proceedToPayment(orderID);
  })
  .then((paymentInfo) => {
    return showOrderSummary(paymentInfo);
  })
  .then(() => {
    updateWallet();
  })
  .catch((err) => {
    console.log("Error", err);
  });