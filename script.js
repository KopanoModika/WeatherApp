function getWeather(){
    const apiKey = '7d1e08b73fbc9f5dfa5719c3dcdca392';
    const city = document.getElementById('city').value;

    if(!city){
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={7d1e08b73fbc9f5dfa5719c3dcdca392}';
    const forcastUrl = 'https://api.openweathermap.org/data/2.5/forcast?q=${city}&appid={7d1e08b73fbc9f5dfa5719c3dcdca392}';

    fetch(currentWeatherUrl)
    .then(response => response.json())
    .then(data => {
        console.error('Error fetching current weather data', error);
        alert('Error fetching current weather data. Please try again');
    });
}