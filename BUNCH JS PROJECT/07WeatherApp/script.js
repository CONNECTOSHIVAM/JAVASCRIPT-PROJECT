document.addEventListener('DOMContentLoaded',()=>{
   const cityInput = document.getElementById("#city-input");
   const getWeatherBtn = document.getElementById('#get-weather-btn');
   const weatherInfo = document.getElementById('#weather-info')
   const cityName = document.getElementById('#city-name');
   const temprature = document.getElementById('#temprature');
   const description = document.getElementById('#description');
   const errorMessage = document.getElementById('#error-message');

   getWeatherBtn.addEventListener('click',()=>{
      const city = cityInput.value.trim();
      if(!city) return;
   })
https://api.openweathermap.org/data/2.5/weather

})