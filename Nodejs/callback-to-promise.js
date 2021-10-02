let string = "hi";

(async() => {
    const callbackFunction = (callback) => {
        string = "hello";
        callback();
    }

    callbackFunction(() => {
        console.log(string);
        // -> hello

        string = "hi";
    });

    const promiseFunction = require('util').promisify(callbackFunction);
    await promiseFunction();

    console.log(string);
})();
