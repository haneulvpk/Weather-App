import React from 'react';

/**
 * WeatherCard Component
 * Displays weather information in a card format
 */
function WeatherCard({ weather, forecast }) {
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

      {forecast.length > 0 && (
        <div className="forecast">
          <h3 className="forecast-title">5-day forecast</h3>
          <div className="forecast-list">
            {forecast.map((day) => (
              <div key={day.date} className="forecast-item">
                <span className="forecast-date">{day.date}</span>
                <span className="forecast-desc">{day.description}</span>
                <span className="forecast-temp">
                  {Math.round(day.tempMin)}° / {Math.round(day.tempMax)}°
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default WeatherCard;
