import React from "react";

function Body({ temperature, realFeelTemperature, windSpeed, airQuality, precipitationProbability, weatherCode }) {
  // Function to get weather icon based on weather condition code
  function getWeatherIcon(weatherCode) {
    switch (weatherCode) {
      case 1: // Sunny
        return "bi bi-sun";
      case 2: // Mostly Sunny
        return "bi bi-cloud-sun";
      case 3: // Partly Sunny
        return "bi bi-cloud-sun";
      case 4: // Intermittent Clouds
        return "bi bi-cloud";
      case 5: // Hazy Sunshine
        return "bi bi-cloud-sun";
      case 6: // Mostly Cloudy
        return "bi bi-clouds";
      case 7: // Cloudy
        return "bi bi-clouds";
      case 8: // Dreary (Overcast)
        return "bi bi-clouds";
      case 11: // Fog
        return "bi bi-fog";
      case 12: // Showers
        return "bi bi-cloud-rain";
      case 13: // Mostly Cloudy with Showers
        return "bi bi-cloud-rain";
      case 14: // Partly Sunny with Showers
        return "bi bi-cloud-rain";
      case 15: // T-Storms
        return "bi bi-cloud-lightning-rain";
      case 16: // Mostly Cloudy with T-Storms
        return "bi bi-cloud-lightning-rain";
      case 17: // Partly Sunny with T-Storms
        return "bi bi-cloud-lightning-rain";
      case 18: // Rain
        return "bi bi-cloud-rain";
      case 19: // Flurries
        return "bi bi-cloud-snow";
      case 20: // Mostly Cloudy with Flurries
        return "bi bi-cloud-snow";
      case 21: // Partly Sunny with Flurries
        return "bi bi-cloud-snow";
      case 22: // Snow
        return "bi bi-snow";
      case 23: // Mostly Cloudy with Snow
        return "bi bi-snow";
      case 24: // Ice
        return "bi bi-thermometer-half";
      case 25: // Sleet
        return "bi bi-cloud-sleet";
      case 26: // Freezing Rain
        return "bi bi-cloud-snow";
      case 29: // Rain and Snow
        return "bi bi-cloud-rain";
      default:
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
