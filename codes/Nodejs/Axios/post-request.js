const axios = require("axios");

(async () => {
	const object = { hello: "hi" };
	const res = await axios({
		method: "POST",
		url: "https://example.com",
		data: JSON.stringify(object),
		headers: { "Content-Type": "application/json" }
	});

	console.log(res);
})();
