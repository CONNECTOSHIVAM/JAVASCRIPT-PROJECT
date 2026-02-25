const API_KEY = "63ec496c417a712baa5f15ac7621bf55";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q={cityname}&appid=";

const inputText = document.querySelector(".input-text");
const searchBtn = document.querySelector(".src");
const weatherIcon = document.querySelector(".sny");


async function getWeather(cityName) {
    const url = API_URL.replace("{cityname}", cityName);
    const response = await fetch(url + API_KEY);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".win").innerHTML = data.wind.speed + " KM/H";
    document.querySelector('.hum').innerHTML = data.main.humidity + "%";
    document.querySelector('.vis').innerHTML = data.visibility + " KM";
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273.15) + "°C";
    
    inputText.value = "";
    inputText.placeholder = "enter the city name";

    if(data.weather[0].main == "clouds"){
        weatherIcon.innerHTML = "cloud";
    }else if(data.weather[0].main == "clear"){
        weatherIcon.innerHTML = "light_mode";
    }else if(data.weather[0].main == "rain"){
        weatherIcon.innerHTML = "water_drop";
    }else if(data.weather[0].main == "snow"){
        weatherIcon.innerHTML = "ac_unit";
    }else if(data.weather[0].main == "thunderstorm")
    {
        weatherIcon.innerHTML = "thunderstorm";
    }else{
        weatherIcon.innerHTML = "sunny";
    }


}

searchBtn.addEventListener("click",()=>{
    getWeather(inputText.value);
    
})


