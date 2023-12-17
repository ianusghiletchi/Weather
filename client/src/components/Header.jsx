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
        <h3 style={{ paddingLeft: '2%' }}>Menu Icon</h3>
        <h3 style={{ justifySelf: 'center', cursor: 'pointer' }} onClick={handleRefreshClick}>
          Refresh
        </h3>
      </div>
    </header>
  );
}

export default Header;
