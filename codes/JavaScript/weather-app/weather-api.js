const btn = document.getElementById("btn");
const api_key = 'https://www.weatherapi.com/docs/'; // GET YOUR OWN API KEY FROM HERE
const imgIcon = document.getElementById('icon');
imgIcon.style.display = 'none';
const fetchWeatherData = async ()=>{
    const inputCity = document.querySelector("#myinput").value;
    const url = `http://api.weatherapi.com/v1/current.json?key=${api_key}&q=${inputCity}&days=${2}`
    console.log(inputCity)
    try {
        const response = await fetch(url);
        const data = await response.json();

        setData(data.location.name, data.location.localtime)
        setTemp(data.current.temp_c, data.current.condition.text, data.current.condition.icon)
    } catch (err) {
        console.log(err);
    }
};

const setData = (name, time)=>{
    const city_name = document.getElementById('city_name');
    const local_time = document.getElementById('local_time');

    city_name.innerText = name;
    local_time.innerText = time;
}

const setTemp = (temperature, condition, icon)=>{
    const temp = document.getElementById('temp');
    const tempText = document.getElementById('text');

    temp.innerText = temperature;
    tempText.innerText = condition;
    imgIcon.style.display = 'block';
    imgIcon.setAttribute("src", icon);
}

btn.addEventListener('click', fetchWeatherData);