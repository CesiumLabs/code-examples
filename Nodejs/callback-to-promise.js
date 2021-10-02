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

    // setTimeout
    const sleep = require('util').promisify(setTimeout);

    console.log('5');
    await sleep(5000);
    console.log('nice');
})();
