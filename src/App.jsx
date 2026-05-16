import { useCallback, useEffect, useMemo, useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import StatCard from './components/StatCard';
import ForecastList from './components/ForecastList';
import AdviceCard from './components/AdviceCard';
import RainAlert from './components/RainAlert';
import OutfitSuggestion from './components/OutfitSuggestion';
import TouchGrassScore from './components/TouchGrassScore';
import { getWeatherByCity } from './services/weatherApi';
import { mockWeather } from './data/mockWeather';
import { getWeatherMood } from './utils/weatherMood';
import { getRainAlert } from './utils/rainAlert';
import { getOutfitSuggestion } from './utils/outfitSuggestion';
import { getTouchGrassScore } from './utils/touchGrassScore';
import { getBackgroundTheme } from './utils/backgroundTheme';

function App() {
  const [searchValue, setSearchValue] = useState('Hanoi');
  const [weather, setWeather] = useState(mockWeather);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const loadWeather = useCallback(async (city) => {
    setIsLoading(true);
    setError('');

    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
    } catch (err) {
      setError(err.message || 'Could not load weather');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      loadWeather('Hanoi');
    }, 0);

    return () => clearTimeout(timer);
  }, [loadWeather]);

  const handleSearch = () => {
    const nextCity = searchValue.trim();
    if (!nextCity) return;
    loadWeather(nextCity);
  };

  const weatherMood = useMemo(() => getWeatherMood(weather), [weather]);
  const rainAlert = useMemo(() => getRainAlert(weather.hourly), [weather]);
  const outfitSuggestion = useMemo(() => getOutfitSuggestion(weather), [weather]);
  const touchGrass = useMemo(() => getTouchGrassScore(weather), [weather]);
  const backgroundTheme = useMemo(() => getBackgroundTheme(weather), [weather]);

  return (
    <div className={`app-bg theme-${backgroundTheme}`}>
      <main className="app-shell">
        <header className="app-header fade-in-card">
          <h1>SkyMood</h1>
          <p>Weather for humans</p>
        </header>

        <SearchBar
          value={searchValue}
          onChange={setSearchValue}
          onSearch={handleSearch}
        />

        {isLoading && <p className="status-message">Loading weather...</p>}
        {error && <p className="status-message error">{error}</p>}

        {!isLoading && (
          <>
            <WeatherCard weather={weather} mood={weatherMood} />

            <section className="stats-grid">
              <StatCard label="Humidity" value={`${weather.humidity}%`} />
              <StatCard label="Wind" value={`${weather.windSpeed} km/h`} />
              <StatCard label="Feels Like" value={`${weather.feelsLike}°`} />
            </section>

            <RainAlert message={rainAlert} />
            <OutfitSuggestion suggestion={outfitSuggestion} />
            <TouchGrassScore score={touchGrass.score} summary={touchGrass.summary} />
            <ForecastList hourly={weather.hourly} />
            <AdviceCard advice={outfitSuggestion} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
