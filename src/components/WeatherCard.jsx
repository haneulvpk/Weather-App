import React from 'react';

/**
 * WeatherCard Component
 * Displays weather information in a card format
 */
function WeatherCard({ weather }) {
  if (!weather) {
    return <div className="weather-card empty">No weather data available</div>;
  }

  const {
    city,
    country,
    temperature,
    description,
    humidity,
    windSpeed,
  } = weather;

  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2 className="city-name">
          {city}, {country}
        </h2>
        <p className="weather-description">{description}</p>
      </div>

      <div className="weather-main">
        <div className="temperature">
          <span className="temp-value">{Math.round(temperature)}</span>
          <span className="temp-unit">°C</span>
        </div>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">Humidity</span>
          <span className="detail-value">{humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">Wind Speed</span>
          <span className="detail-value">{windSpeed} m/s</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
