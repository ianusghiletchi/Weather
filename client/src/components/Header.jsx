import React from "react";
import axios from 'axios';

function Header({ onRefresh }) {
  const handleRefreshClick = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/weather");
      const todayTemperatureCelsius = response.data.DailyForecasts[0].Temperature.Minimum.Value;

      onRefresh(todayTemperatureCelsius);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <header>
      <div className="nav-bar">
        <div className="icon-and-title">
          <i style={{ paddingLeft: '2%', fontSize: '3rem' }} className="bi bi-brightness-alt-high"></i>
          <h3>Weather+</h3>
        </div>
        <h3 style={{ justifySelf: 'end', cursor: 'pointer' }} onClick={handleRefreshClick}>
          Refresh
        </h3>
      </div>
    </header>
  );
}  

export default Header;
