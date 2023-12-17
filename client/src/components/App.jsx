import React, { useState, useEffect } from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Body from "./Body.jsx";
import axios from 'axios';

function App() {
  const [temperature, setTemperature] = useState(0);

  const handleRefresh = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/weather");
      const todayTemperature = response.data.DailyForecasts[0].Temperature.Minimum.Value;
      setTemperature(todayTemperature);
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
      <Body temperature={temperature} />
      <Footer />
    </div>
  );
}

export default App;
