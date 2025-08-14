const apiKey = `6fbfaf34a6b217687723315505218c74`;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric'
const apiUrl1 = 'https://api.openweathermap.org/data/2.5/forecast?units=metric'

const searchBox = document.querySelector('.search-input')
const searchBtn = document.querySelector('.search-btn')
const weatherIcon = document.querySelector('.weather-icon')
const forcastIcon1 =document.querySelector('.forcasticon-1')
const forcastIcon2 =document.querySelector('.forcasticon-2')
const forcastIcon3 =document.querySelector('.forcasticon-3')
const forcastIcon4 =document.querySelector('.forcasticon-4')
const forcastIcon5 =document.querySelector('.forcasticon-5')

// FUNCTION FOR DATA FETCHING BY CITY
async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    var  data = await response.json();


    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.wind').innerHTML = data.wind.speed + " M/S";


    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "/clouds.png";
    }
    else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "/clear.png"
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "/rain.png";
    }
    else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "/drizzle.png";
    }
    else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "/mist.png";
    }
    else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "/snow.png";
    }
   
  