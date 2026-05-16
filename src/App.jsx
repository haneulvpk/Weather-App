import React, { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import {
  getFiveDayForecastByCity,
  getFiveDayForecastByCoords,
  getWeatherByCity,
  getWeatherByCoords,
} from './services/weatherApi';
import { mockCities } from './data/mockWeather';
import './App.css';

const SEARCH_HISTORY_KEY = 'weather.searchHistory';

/**
 * Main App Component
 * Manages weather app state and user interactions
 */
function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(SEARCH_HISTORY_KEY);
      if (saved) {
        setSearchHistory(JSON.parse(saved));
      }
    } catch {
      setSearchHistory([]);
    }
  }, []);

  const persistHistory = (cityName) => {
    const normalized = cityName.trim();
    if (!normalized) return;

    setSearchHistory((prev) => {
      const next = [
        normalized,
        ...prev.filter((item) => item.toLowerCase() !== normalized.toLowerCase()),
      ].slice(0, 5);
      localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(next));
      return next;
    });
  };

  /**
   * Handle search form submission
   * Fetches weather data for the entered city
   */
  const handleSearch = async (city) => {
    setIsLoading(true);
    setError(null);

    try {
      const [current, fiveDayForecast] = await Promise.all([
        getWeatherByCity(city),
        getFiveDayForecastByCity(city),
      ]);
      setWeather(current);
      setForecast(fiveDayForecast);
      persistHistory(current.city);
    } catch (err) {
      setError(err.message || 'An error occurred while fetching weather data');
      setWeather(null);
      setForecast([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUseMyLocation = async () => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported in this browser');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
        });
      });

      const { latitude, longitude } = position.coords;
      const [current, fiveDayForecast] = await Promise.all([
        getWeatherByCoords(latitude, longitude),
        getFiveDayForecastByCoords(latitude, longitude),
      ]);
      setWeather(current);
      setForecast(fiveDayForecast);
      persistHistory(current.city);
    } catch (err) {
      setError(err.message || 'Could not get your current location');
      setWeather(null);
      setForecast([]);
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
        <SearchBar
          onSearch={handleSearch}
          onUseMyLocation={handleUseMyLocation}
          onSelectHistory={handleSearch}
          recentSearches={searchHistory}
          cityOptions={mockCities}
          isLoading={isLoading}
        />

        {error && <ErrorMessage message={error} />}

        {isLoading && <LoadingSpinner />}

        {weather && !isLoading && <WeatherCard weather={weather} forecast={forecast} />}
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
