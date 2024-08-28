let appUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric';
let appId = 'e03a63f82b0b96de473cdb42d1fd8ff1'
let temperature = document.getElementById('temp')
let searchBtn = document.getElementById('searchBtn')
getWeather('delhi')
searchBtn.addEventListener("click",()=>{
    let input = document.querySelector(".search input")
    getWeather(input.value)
})
async function getWeather(city){
    let res = await fetch(appUrl+`&q=${city}`+`&appid=${appId}`)
    let weather = await res.json();
    console.log(weather)
    document.getElementById('cityName').innerHTML = weather.name
    temperature.innerText = Math.floor(weather.main.temp)+'°C';
    document.querySelector('.humidity-val').innerText = weather.main.humidity+'%'
    document.querySelector('.wps').innerText = weather.wind.speed+' km/hr'


}
