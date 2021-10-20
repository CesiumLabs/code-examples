const btn = document.getElementById("btn");
const imgIcon = document.getElementById("icon");
const city_name = document.getElementById("city_name");
const local_time = document.getElementById("local_time");
const temp = document.getElementById("temp");
const tempText = document.getElementById("text");

const api_key = ""; // GET YOUR OWN API KEY FROM https://www.weatherapi.com/docs/

imgIcon.style.display = "none";

btn.addEventListener("click", async () => {
	const { value } = document.querySelector("#myinput");
	const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${value}&days=${2}`;
	try {
		const response = await fetch(url);
		const { location, current } = await response.json();

		imgIcon.style.display = "block";
		
		city_name.innerText = location.name;
		local_time.innerText = location.localtime;
		
		temp.innerText = current.temp_c;
		tempText.innerText = current.condition.text;
		imgIcon.setAttribute("src", current.condition.icon);
	} catch (err) {
		console.log(err);
	}
});
