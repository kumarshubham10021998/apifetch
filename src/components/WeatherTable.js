// src/WeatherTable.js

import React, { useEffect, useState } from 'react';

const WeatherTable = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    fetch(
      'https://api.open-meteo.com/v1/forecast?latitude=22&longitude=79&current=temperature_2m,relative_humidity_2m,precipitation,rain,weather_code,cloud_cover,wind_speed_10m,wind_direction_10m&hourly=&timezone=Asia%2FSingapore'
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data.current))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  if (!weatherData) {
    return <p>Loading...</p>;
  }

  return (
    <table border="1" cellPadding="10" cellSpacing="0">
      <thead>
        <tr>
          <th>Time</th>
          <th>Temperature (°C)</th>
          <th>Humidity (%)</th>
          <th>Precipitation (mm)</th>
          <th>Rain (mm)</th>
          <th>Weather Code</th>
          <th>Cloud Cover (%)</th>
          <th>Wind Speed (km/h)</th>
          <th>Wind Direction (°)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{weatherData.time}</td>
          <td>{weatherData.temperature_2m}</td>
          <td>{weatherData.relative_humidity_2m}</td>
          <td>{weatherData.precipitation}</td>
          <td>{weatherData.rain}</td>
          <td>{weatherData.weather_code}</td>
          <td>{weatherData.cloud_cover}</td>
          <td>{weatherData.wind_speed_10m}</td>
          <td>{weatherData.wind_direction_10m}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default WeatherTable;
