import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Body from "./Body.jsx";
import axios from 'axios';

function App() {
  const [temperature, setTemperature] = useState(0);
  const [realFeelTemperature, setRealFeelTemperature] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [airQuality, setAirQuality] = useState(0);
  const [precipitationProbability, setPrecipitationProbability] = useState(0);

  // Function to convert Fahrenheit to Celsius
  function convertFahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5 / 9);
  }

  const handleRefresh = async () => {
    try {
      const cachedData = localStorage.getItem("weatherData");
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        setTemperature(parsedData.temperature);
        setRealFeelTemperature(parsedData.realFeelTemperature);
        setWindSpeed(parsedData.windSpeed);
        setAirQuality(parsedData.airQuality);
        setPrecipitationProbability(parsedData.precipitationProbability);
      } else {
        const response = await axios.get("http://localhost:5000/api/weather");
        const todayTemperature = convertFahrenheitToCelsius(response.data.DailyForecasts[0].Temperature.Maximum.Value);
        const todayRealFeelTemperature = convertFahrenheitToCelsius(response.data.DailyForecasts[0].RealFeelTemperature.Maximum.Value);
        const windSpeed = response.data.DailyForecasts[0].Wind.Speed.Value;
        const airQuality = response.data.DailyForecasts[0].AirAndPollen.find(item => item.Name === "AirQuality").Value;
        const precipitationProbability = response.data.DailyForecasts[0].PrecipitationProbability;

        setTemperature(todayTemperature);
        setRealFeelTemperature(todayRealFeelTemperature);
        setWindSpeed(windSpeed);
        setAirQuality(airQuality);
        setPrecipitationProbability(precipitationProbability);

        localStorage.setItem("weatherData", JSON.stringify({
          temperature: todayTemperature,
          realFeelTemperature: todayRealFeelTemperature,
          windSpeed,
          airQuality,
          precipitationProbability,
        }));
      }
    } catch (error) {
      console.error(error);
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
      />
      <Footer />
    </div>
  );
}

export default App;