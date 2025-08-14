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
   
   // ALERT AT MORE THAN 40 CELCIUS
      const warn =data.main.temp

    async function notification(warn) {
        if(warn>40){
        alert("The Temperature is above 40°C")
    }}
    notification(warn)
}
// FUNCTION FOR 5 DAYS WEATHER FORECASTS
async function daysForecast(city) {
    const response1 = await fetch(apiUrl1 + `&q=${city}` + `&appid=${apiKey}`);
    var data1 = await response1.json();

    console.log(data1);
    document.querySelector('.date1').innerHTML = data1.list[2].dt_txt;
    document.querySelector('.temperature1').innerHTML = Math.round(data1.list[2].main.temp) + "°C";
    document.querySelector('.humid1').innerHTML = data1.list[2].main.humidity + "%";
    document.querySelector('.windair1').innerHTML = data1.list[2].wind.speed + "m/s";

    document.querySelector('.date2').innerHTML = data1.list[10].dt_txt;
    document.querySelector('.temperature2').innerHTML = Math.round(data1.list[10].main.temp) + "°C";
    document.querySelector('.humid2').innerHTML = data1.list[10].main.humidity + "%";
    document.querySelector('.windair2').innerHTML = data1.list[10].wind.speed + "m/s";

    document.querySelector('.date3').innerHTML = data1.list[18].dt_txt;
    document.querySelector('.temperature3').innerHTML = Math.round(data1.list[18].main.temp) + "°C";
    document.querySelector('.humid3').innerHTML = data1.list[18].main.humidity + "%";
    document.querySelector('.windair3').innerHTML = data1.list[18].wind.speed + "m/s";

    document.querySelector('.date4').innerHTML = data1.list[26].dt_txt;
    document.querySelector('.temperature4').innerHTML = Math.round(data1.list[26].main.temp) + "°C";
    document.querySelector('.humid4').innerHTML = data1.list[26].main.humidity + "%";
    document.querySelector('.windair4').innerHTML = data1.list[26].wind.speed + "m/s";

    document.querySelector('.date5').innerHTML = data1.list[34].dt_txt;
    document.querySelector('.temperature5').innerHTML = Math.round(data1.list[34].main.temp) + "°C";
    document.querySelector('.humid5').innerHTML = data1.list[34].main.humidity + "%";
    document.querySelector('.windair5').innerHTML = data1.list[34].wind.speed + "m/s";

    // DAYS TO BE FORECASTED
    const day1 =data1.list[2].weather[0].main;
    const day2 =data1.list[10].weather[0].main;
    const day3 =data1.list[18].weather[0].main;
    const day4 =data1.list[26].weather[0].main;
    const day5 =data1.list[34].weather[0].main

    // DATA FOR DAY1
    if (day1 == "Clouds") {
        forcastIcon1.src = "/clouds.png";
    }
    else if (day1 == "Clear") {
        forcastIcon1.src = "/clear.png"
    }
    else if (day1 == "Rain") {
        forcastIcon1.src = "/rain.png";
    }
    else if (day1== "Drizzle") {
       forcastIcon1.src = "/drizzle.png";
    }
    else if (day1 == "Mist") {
        forcastIcon1.src = "/mist.png";
    }
    else if (day1 == "Snow") {
        forcastIcon1.src = "/snow.png";
    }
    // DATA FOR DAY2
    if (day2 == "Clouds") {
        forcastIcon2.src = "/clouds.png";
    }
    else if (day2 == "Clear") {
        forcastIcon2.src = "/clear.png"
    }
    else if (day2 == "Rain") {
        forcastIcon2.src = "/rain.png";
    }
    else if (day2== "Drizzle") {
       forcastIcon2.src = "/drizzle.png";
    }
    else if (day2 == "Mist") {
        forcastIcon2.src = "/mist.png";
    }
    else if (day2 == "Snow") {
        forcastIcon2.src = "/snow.png";
    }
    // DATA FOR DAY3
    if (day3 == "Clouds") {
        forcastIcon3.src = "/clouds.png";
    }
    else if (day3 == "Clear") {
        forcastIcon3.src = "/clear.png"
    }
    else if (day3 == "Rain") {
        forcastIcon3.src = "/rain.png";
    }
    else if (day3== "Drizzle") {
       forcastIcon3.src = "/drizzle.png";
    }
    else if (day3 == "Mist") {
        forcastIcon3.src = "/mist.png";
    }
    else if (day3 == "Snow") {
        forcastIcon3.src = "/snow.png";
    }
     //  DATA FOR DAY4
    if (day4 == "Clouds") {
        forcastIcon4.src = "/clouds.png";
    }
    else if (day4 == "Clear") {
        forcastIcon4.src = "/clear.png"
    }
    else if (day4 == "Rain") {
        forcastIcon4.src = "/rain.png";
    }
    else if (day4== "Drizzle") {
       forcastIcon4.src = "/drizzle.png";
    }
    else if (day4 == "Mist") {
        forcastIcon4.src = "/mist.png";
    }
    else if (day4 == "Snow") {
        forcastIcon4.src = "/snow.png";
    }

     // DATA FOR DAY5
    if (day5 == "Clouds") {
        forcastIcon5.src = "/clouds.png";
    }
    else if (day5 == "Clear") {
        forcastIcon5.src = "/clear.png"
    }
    else if (day5 == "Rain") {
        forcastIcon5.src = "/rain.png";
    }
    else if (day5== "Drizzle") {
       forcastIcon5.src = "/drizzle.png";
    }
    else if (day5 == "Mist") {
        forcastIcon5.src = "/mist.png";
    }
    else if (day5 == "Snow") {
        forcastIcon5.src = "/snow.png";
    }

   
}
   