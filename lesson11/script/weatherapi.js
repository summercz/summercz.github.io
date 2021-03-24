function fetch_weather(id) {

    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id='+id+'&appid=ce4a7567162ee2c718a59cbec4e90ea5&units=imperial';

    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        const weather_description = jsObject.weather[0].description;
        const current_temp = parseFloat(jsObject.main.temp);
        const high_temp = parseFloat(jsObject.main.temp_max);
        const humidity = parseFloat(jsObject.main.humidity);
        const windspeed = parseFloat(jsObject.wind.speed);
        wind_chill = 35.74 + 0.6215 * current_temp - 35.75 * windspeed ** 0.16 + 0.4275 * current_temp * windspeed ** 0.16;
        
        document.getElementById("weather_description").innerHTML = weather_description;
        document.getElementById("current_temp").innerHTML = current_temp.toFixed(0) + " °F";
        document.getElementById("high_temp").innerHTML = high_temp.toFixed(0) + " °F";
        document.getElementById("windchill").innerHTML = wind_chill.toFixed(0) + " °F";
        document.getElementById("humidity").innerHTML = humidity.toFixed(0) + "%";
        document.getElementById("windspeed").innerHTML = windspeed.toFixed(0) + "MPH";

    });

    const apiURL2 = 'https://api.openweathermap.org/data/2.5/forecast?id='+id+'&appid=ce4a7567162ee2c718a59cbec4e90ea5&units=imperial';
    fetch(apiURL2)
        .then((response) => response.json())
        .then((jsObject) => {
            var forecast_list = jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
            console.table(forecast_list);

            const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

            for (let i = 0; i < forecast_list.length; i++) {
                const date = new Date(forecast_list[i].dt_txt);
                const imgSrc = `https://openweathermap.org/img/w/${forecast_list[i].weather[0].icon}.png`;


                document.getElementById(`day${i}`).textContent = weekdays[date.getDay()];
                document.getElementById(`temp${i}`).textContent = forecast_list[i].main.temp.toFixed(0) + " °F";
                document.getElementById(`icon${i}`).setAttribute('src', imgSrc);
            }
    });
}
