// const API_KEY = 'b74e3ee04ef7a010c50e3b225814eb60';

// async function fetchWeatherData(city){
//     try{
//         const response = await fetch(
//             `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
//         );

//         if(!response.ok){
//             throw new Error(`Enter the correct city name ${city}`)
//         }

//         const data = await response.json()
//         console.log("Weather data: ",data);
//     }catch(error){
//         console.log("fetching temprature the server issue: ",error)
//     }
// }
// fetchWeatherData("jamshedpur")

date = new Date()
console.log(date)
console.log(date.getDate())
console.log(date.getMonth())
console.log(date.getFullYear())
console.log(date.getMonth())