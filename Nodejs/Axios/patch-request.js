const axios = require('axios');

(async() => {
    const object = { hello: "hello patch" }
    const res = await axios({ 
        method: "PATCH",
        url: "https://example.com",
        data: JSON.stringify(object),
        headers: { "Content-Type": "application/json" }
    });

    console.log(res);
})();
