import React from "react";

function Body({ temperature, realFeelTemperature, windSpeed, airQuality, precipitationProbability, weatherCode }) {
  console.log("Rendering Body with weatherCode:", weatherCode);
  // Function to get weather icon based on weather condition code
  function getWeatherIcon(weatherCode) {
    console.log("Weather Code:", weatherCode);
  
    const cleanWeatherCode = weatherCode.toLowerCase().trim();
  
    if (cleanWeatherCode === "sunny") {
      return "bi bi-sun";
    } else if (
      cleanWeatherCode === "mostly sunny" ||
      cleanWeatherCode === "partly sunny" ||
      cleanWeatherCode === "hazy sunshine"
    ) {
      return "bi bi-cloud-sun";
    } else if (
      cleanWeatherCode === "intermittent clouds" ||
      cleanWeatherCode === "cloudy" ||
      cleanWeatherCode === "dreary (overcast)"
    ) {
      return "bi bi-clouds";
    } else if (cleanWeatherCode === "fog") {
      return "bi bi-fog";
    } else if (
      cleanWeatherCode === "showers" ||
      cleanWeatherCode === "mostly cloudy with showers" ||
      cleanWeatherCode === "partly sunny with showers" ||
      cleanWeatherCode === "rain and snow"
    ) {
      return "bi bi-cloud-rain";
    } else if (
      cleanWeatherCode === "t-storms" ||
      cleanWeatherCode === "mostly cloudy with t-storms" ||
      cleanWeatherCode === "partly sunny with t-storms"
    ) {
      return "bi bi-cloud-lightning-rain";
    } else if (cleanWeatherCode === "rain") {
      return "bi bi-cloud-rain";
    } else if (
      cleanWeatherCode === "flurries" ||
      cleanWeatherCode === "mostly cloudy with flurries" ||
      cleanWeatherCode === "partly sunny with flurries"
    ) {
      return "bi bi-cloud-snow";
    } else if (cleanWeatherCode === "snow" || cleanWeatherCode === "mostly cloudy with snow") {
      return "bi bi-snow";
    } else if (cleanWeatherCode === "ice") {
      return "bi bi-thermometer-half";
    } else if (cleanWeatherCode === "sleet" || cleanWeatherCode === "freezing rain") {
      return "bi bi-cloud-sleet";
    } else if (cleanWeatherCode === "rain and snow") {
      return "bi bi-cloud-rain";
    } else {
      return "bi bi-broadcast-pin";
    }
  }

  return (
    <div>
      <div className="cwi-div">
        <i style={{fontSize: '10rem'}} className={getWeatherIcon(weatherCode)}></i>
      </div>
      <div className="temp-div">
        <h1 style={{ fontSize: '5rem', color: 'aliceblue', justifySelf: 'center', marginTop: '30px', marginBottom: '20px' }}>
          {temperature}°
        </h1>
        <h3 style={{ fontSize: '2rem', color: 'aliceblue', margin: '0%' }}>RealFeel {realFeelTemperature}°</h3>
      </div>
      <div className="future-wcast">
        <div className="fwc-day">
          <i className="bi bi-wind"></i>
          <h2>{windSpeed} km/h</h2>
        </div>
        <div className="fwc-day">
          <i className="bi bi-lungs"></i>
          <h2>{airQuality}</h2>
        </div>
        <div className="fwc-day">
          <i className="bi bi-umbrella"></i>
          <h2>{precipitationProbability}%</h2>
        </div>
      </div>
    </div>
  );
}

export default Body;