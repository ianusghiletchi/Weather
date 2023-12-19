import React, { useState, useEffect } from "react";
import axios from 'axios';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Body from "./Body.jsx";

function App() {
  const [temperature, setTemperature] = useState(0);
  const [realFeelTemperature, setRealFeelTemperature] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [airQuality, setAirQuality] = useState("");
  const [precipitationProbability, setPrecipitationProbability] = useState(0);
  const [weatherCode, setWeatherCode] = useState("");

  function convertFahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5 / 9);
  }

  function convertMilesToKilometers(miles) {
    const kilometers = miles * 1.60934;
    return  Math.round(kilometers);
  }

  const handleRefresh = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/weather");
      console.log("API Response:", response);

      const todayTemperature = convertFahrenheitToCelsius(response.data.DailyForecasts[0].Temperature.Maximum.Value);
      const todayRealFeelTemperature = convertFahrenheitToCelsius(response.data.DailyForecasts[0].RealFeelTemperature.Maximum.Value);
      const windSpeed = convertMilesToKilometers(response.data.DailyForecasts[0].Day?.Wind?.Speed?.Value || 0);
      const airQuality = response.data.DailyForecasts[0].AirAndPollen[0].Category || "Unknown";
      const precipitationProbability = response.data.DailyForecasts[0].Day.PrecipitationProbability;
      const weatherCode = response.data.Headline.Category;

      console.log(weatherCode);

      setTemperature(todayTemperature);
      setRealFeelTemperature(todayRealFeelTemperature);
      setWindSpeed(windSpeed);
      setAirQuality(airQuality);
      setPrecipitationProbability(precipitationProbability);
      setWeatherCode(weatherCode);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <div>
      <Header onRefresh={handleRefresh} />
      <Body
        temperature={temperature}
        realFeelTemperature={realFeelTemperature}
        windSpeed={windSpeed}
        airQuality={airQuality}
        precipitationProbability={precipitationProbability}
        weatherCode={weatherCode}
      />
      <Footer />
    </div>
  );
}

export default App;
