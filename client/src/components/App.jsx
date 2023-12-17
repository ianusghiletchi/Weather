import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Body from "./Body.jsx";
import axios from 'axios';

function App() {
  const [temperature, setTemperature] = useState(0);
  const [realFeelTemperature, setRealFeelTemperature] = useState(0);

  // Function to convert Fahrenheit to Celsius
  function convertFahrenheitToCelsius(fahrenheit) {
    return Math.round((fahrenheit - 32) * 5 / 9);
  }

  // Function to handle data refresh
  const handleRefresh = async () => {
    try {
      // Check if cached data exists in local storage
      const cachedData = localStorage.getItem("weatherData");
      if (cachedData) {
        const parsedData = JSON.parse(cachedData);
        setTemperature(parsedData.temperature);
        setRealFeelTemperature(parsedData.realFeelTemperature);
      } else {
        // Fetch data from the server if no cached data
        const response = await axios.get("http://localhost:5000/api/weather");
        const todayTemperature = convertFahrenheitToCelsius(response.data.DailyForecasts[0].Temperature.Maximum.Value);
        const todayRealFeelTemperature = convertFahrenheitToCelsius(response.data.DailyForecasts[0].RealFeelTemperature.Maximum.Value);

        // Update state
        setTemperature(todayTemperature);
        setRealFeelTemperature(todayRealFeelTemperature);

        // Cache data in local storage
        localStorage.setItem("weatherData", JSON.stringify({ temperature: todayTemperature, realFeelTemperature: todayRealFeelTemperature }));
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Use effect to run on component mount
  useEffect(() => {
    handleRefresh();
  }, []);

  return (
    <div>
      <Header onRefresh={handleRefresh} />
      <Body temperature={temperature} realFeelTemperature={realFeelTemperature} />
      <Footer />
    </div>
  );
}

export default App;
