const promise = new Promise((resolve, reject) => { 
    let success = false; 
if(success){
    resolve("Operation was successful!");

}
else{
    reject("Operation failed.");
}
});


promise
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error(error);
});



