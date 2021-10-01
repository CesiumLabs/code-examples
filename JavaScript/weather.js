const prompt = require('prompt');
const fetch = require('node-fetch');

prompt.message = '';

const schema = {
	properties: {
		city: {
			message: 'City Name',
		},
	},
};

prompt.get(schema, async function (err, result) {
	const weather = await fetch(
		`https://api.openweathermap.org/data/2.5/weather?q=${result.city}&appid=8ef61edcf1c576d65d836254e11ea420`,
	).then((res) => res.json());
	if (weather.cod != 404) {
		console.log(
			'\33[93m' +
				'\33[1m' +
				`Current weather in ${weather.name}` +
				'\33[0m' +
				'\33[93m' +
				'\33[1m' +
				' is ' +
				'\33[0m' +
				'\33[92m' +
				'\33[1m' +
				weather.weather[0].main +
				'\33[0m' +
				'\33[93m' +
				'\33[1m' +
				' and temperature is ' +
				'\33[0m' +
				'\33[92m' +
				'\33[1m' +
				(weather.main.temp - 273.15).toFixed(2) +
				'°C.' +
				'\33[0m' +
				'\33[93m' +
				'\33[1m' +
				' Humidity is ' +
				'\33[0m' +
				'\33[92m' +
				'\33[1m' +
				weather.main.humidity +
				'%.' +
				'\33[0m',
		);
	} else {
		console.log('City not found.');
	}
});
