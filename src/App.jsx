import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { getWeatherByCity } from './services/weatherApi';
import { mockWeatherData } from './data/mockWeather';
import './App.css';

/**
 * Main App Component
 * Manages weather app state and user interactions
 */
function App() {
  const [weather, setWeather] = useState(mockWeatherData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  /**
   * Handle search form submission
   * Fetches weather data for the entered city
   */
  const handleSearch = async (city) => {
    setIsLoading(true);
    setError(null);

    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching weather data');
      setWeather(null);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Weather App</h1>
        <p className="subtitle">Check weather for any city</p>
      </header>

      <main className="app-main">
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {error && <ErrorMessage message={error} />}

        {isLoading && <LoadingSpinner />}

        {weather && !isLoading && <WeatherCard weather={weather} />}
      </main>

      <footer className="app-footer">
        <p>
          Weather data provided by{' '}
          <a href="https://openweathermap.org" target="_blank" rel="noopener noreferrer">
            OpenWeatherMap
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
