function calculate_windchill(temperature, wind_speed) {
    if (temperature <= 50 && wind_speed > 3 ) {
        wind_chill = 35.74 + 0.6215 * temperature - 35.75 * wind_speed ** 0.16 + 0.4275 * temperature * wind_speed ** 0.16;
        document.getElementById("windchill").innerHTML = wind_chill.toFixed(0) + " °F";
    } else {
        document.getElementById("windchill").innerHTML = "N/A";
    }
}
  
calculate_windchill(39, 5);