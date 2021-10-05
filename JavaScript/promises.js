//How to create a promise and handle it

let resolvePromise = new Promise((resolve, reject) => {
    resolve('Hi! From inside a promise');
});




let rejectPromise = new Promise((reject, reject) => {
    reject('Rejected! From inside a promise');
});



resolvePromise
.then((response) => console.log(response))
.catch((err) => console.log(err))


rejectPromise
.then((response) => console.log(response))
.catch((err) => console.log(err));


//Guess what these 2 promises will return ?