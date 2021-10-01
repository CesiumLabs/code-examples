const axios = require('axios');

(async() => {
    const object = { hello: "hello delete" }
    const res = await axios({ 
        method: "DELETE",
        url: "https://example.com",
        data: JSON.stringify(object),
        headers: { "Content-Type": "application/json" }
    });

    console.log(res);
})();
