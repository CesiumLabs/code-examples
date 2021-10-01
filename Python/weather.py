import requests

api_key = "8ef61edcf1c576d65d836254e11ea420"
city_name = input("Input City Name")


def requestapi(city_name: str):
    base_url = "https://api.openweathermap.org/data/2.5/weather?"
    complete_url = base_url + "appid=" + api_key + "&q=" + city_name
    response = requests.get(complete_url)
    return response


x = requestapi(city_name).json()
if x["cod"] != "404":
    y = x["main"]
    current_temperature = y["temp"]
    current_humidiy = y["humidity"]
    z = x["weather"]
    weather_description = z[0]["description"]
    print(
        " Temperature in kelvin unit = "
        + str(current_temperature)
        + "\n Humidity (in percentage) = "
        + str(current_humidiy)
        + "\n Description = "
        + str(weather_description)
    )
else:
    print("City Not Found")
