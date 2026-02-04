const searchBtn = document.getElementById('search-btn');
const cityInput = document.getElementById('city-input');
const apikey = 'afca2fe3fb829707f8c43f8f99e32adb';

// Element selectors
const cityNameEl = document.getElementById('city-name');
const tempEl = document.getElementById('temp');
const descEl = document.getElementById('description');



searchBtn.addEventListener('click', () => {
    const city = cityInput.value;
    if(city){
        getWeatherData(city);
    }
});

async function getWeatherData(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('city not found');
        }
        const data = await response.json();
        updateUI(data);       
    } 
    catch(error){
        alert(error.message);
    }
}

function updateUI(data){
    cityNameEl.innerText = data.name;
    tempEl.innerText = `${Math.round(data.main.temp)}°C`;
    descEl.innerText = data.weather[0].description;
}