import React from "react";

function Body({ temperature, realFeelTemperature, windSpeed, airQuality, precipitationProbability }) {
  return (
    <div>
      <div className="cwi-div">
        <i className="bi bi-cloud-snow cwi"></i>
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
