/**
 * Weather API Service
 * Primary: OpenWeatherMap (requires API key)
 * Fallback: Open-Meteo (no API key)
 */

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const WEATHER_BASE_URL = 'https://api.openweathermap.org/data/2.5';
const GEO_BASE_URL = 'https://api.openweathermap.org/geo/1.0';
const METEO_GEO_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const METEO_FORECAST_URL = 'https://api.open-meteo.com/v1/forecast';

function hasOpenWeatherKey() {
  return Boolean(API_KEY);
}

async function resolveLocation(query) {
  if (hasOpenWeatherKey()) {
    const params = new URLSearchParams({
      q: query,
      limit: '5',
      appid: API_KEY,
    });

    const response = await fetch(`${GEO_BASE_URL}/direct?${params}`);
    if (!response.ok) throw new Error('Failed to resolve location');
    const locations = await response.json();
    if (!locations.length) throw new Error('Location not found');

    return {
      name: locations[0].name,
      country: locations[0].country,
      lat: locations[0].lat,
      lon: locations[0].lon,
      source: 'openweather',
    };
  }

  const params = new URLSearchParams({
    name: query,
    count: '5',
    language: 'en',
    format: 'json',
  });

  const response = await fetch(`${METEO_GEO_URL}?${params}`);
  if (!response.ok) throw new Error('Failed to resolve location');
  const data = await response.json();
  if (!data.results?.length) throw new Error('Location not found');

  const top = data.results[0];
  return {
    name: top.name,
    country: top.country_code || top.country || 'N/A',
    lat: top.latitude,
    lon: top.longitude,
    source: 'open-meteo',
  };
}

export async function getWeatherByCity(cityQuery) {
  if (!cityQuery?.trim()) throw new Error('City name is required');
  const location = await resolveLocation(cityQuery.trim());
  return location.source === 'openweather'
    ? fetchCurrentByCoordsOpenWeather(location.lat, location.lon)
    : fetchCurrentByCoordsMeteo(location.lat, location.lon, location.name, location.country);
}

export async function getFiveDayForecastByCity(cityQuery) {
  if (!cityQuery?.trim()) throw new Error('City name is required');
  const location = await resolveLocation(cityQuery.trim());
  return location.source === 'openweather'
    ? fetchForecastByCoordsOpenWeather(location.lat, location.lon)
    : fetchForecastByCoordsMeteo(location.lat, location.lon);
}

export async function getWeatherByCoords(lat, lon) {
  return hasOpenWeatherKey()
    ? fetchCurrentByCoordsOpenWeather(lat, lon)
    : fetchCurrentByCoordsMeteo(lat, lon);
}

export async function getFiveDayForecastByCoords(lat, lon) {
  return hasOpenWeatherKey()
    ? fetchForecastByCoordsOpenWeather(lat, lon)
    : fetchForecastByCoordsMeteo(lat, lon);
}

async function fetchCurrentByCoordsOpenWeather(lat, lon) {
  const params = new URLSearchParams({
    lat: String(lat),
    lon: String(lon),
    appid: API_KEY,
    units: 'metric',
    lang: 'vi',
  });

  const response = await fetch(`${WEATHER_BASE_URL}/weather?${params}`);
  if (!response.ok) throw new Error('Failed to fetch weather data');
  const data = await response.json();

  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    coordinates: { lat: data.coord.lat, lon: data.coord.lon },
  };
}

async function fetchForecastByCoordsOpenWeather(lat, lon) {
  const params = new URLSearchParams({
    lat: String(lat),
    lon: String(lon),
    appid: API_KEY,
    units: 'metric',
    lang: 'vi',
  });

  const response = await fetch(`${WEATHER_BASE_URL}/forecast?${params}`);
  if (!response.ok) throw new Error('Failed to fetch forecast data');
  const data = await response.json();
  return mapOpenWeatherForecast(data.list);
}

async function fetchCurrentByCoordsMeteo(lat, lon, cityName, countryCode) {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    current: 'temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code',
    timezone: 'auto',
  });

  const response = await fetch(`${METEO_FORECAST_URL}?${params}`);
  if (!response.ok) throw new Error('Failed to fetch weather data');
  const data = await response.json();

  return {
    city: cityName || 'Current location',
    country: countryCode || 'N/A',
    temperature: data.current.temperature_2m,
    description: meteoCodeToDescription(data.current.weather_code),
    humidity: data.current.relative_humidity_2m,
    windSpeed: data.current.wind_speed_10m / 3.6,
    coordinates: { lat, lon },
  };
}

async function fetchForecastByCoordsMeteo(lat, lon) {
  const params = new URLSearchParams({
    latitude: String(lat),
    longitude: String(lon),
    daily: 'weather_code,temperature_2m_max,temperature_2m_min',
    forecast_days: '5',
    timezone: 'auto',
  });

  const response = await fetch(`${METEO_FORECAST_URL}?${params}`);
  if (!response.ok) throw new Error('Failed to fetch forecast data');
  const data = await response.json();

  return data.daily.time.map((date, idx) => ({
    date,
    tempMin: data.daily.temperature_2m_min[idx],
    tempMax: data.daily.temperature_2m_max[idx],
    description: meteoCodeToDescription(data.daily.weather_code[idx]),
  }));
}

function mapOpenWeatherForecast(entries) {
  const groupedByDay = entries.reduce((acc, item) => {
    const day = item.dt_txt.split(' ')[0];
    if (!acc[day]) acc[day] = [];
    acc[day].push(item);
    return acc;
  }, {});

  return Object.entries(groupedByDay)
    .slice(0, 5)
    .map(([day, dayEntries]) => {
      const temps = dayEntries.map((item) => item.main.temp);
      const selected = dayEntries.reduce((closest, item) => {
        const hour = Number(item.dt_txt.split(' ')[1].split(':')[0]);
        const closestHour = Number(closest.dt_txt.split(' ')[1].split(':')[0]);
        return Math.abs(hour - 12) < Math.abs(closestHour - 12) ? item : closest;
      }, dayEntries[0]);

      return {
        date: day,
        tempMin: Math.min(...temps),
        tempMax: Math.max(...temps),
        description: selected.weather[0].description,
      };
    });
}

function meteoCodeToDescription(code) {
  const mapping = {
    0: 'Clear sky',
    1: 'Mainly clear',
    2: 'Partly cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing rime fog',
    51: 'Light drizzle',
    53: 'Moderate drizzle',
    55: 'Dense drizzle',
    61: 'Slight rain',
    63: 'Moderate rain',
    65: 'Heavy rain',
    71: 'Slight snow',
    73: 'Moderate snow',
    75: 'Heavy snow',
    80: 'Rain showers',
    81: 'Rain showers',
    82: 'Violent rain showers',
    95: 'Thunderstorm',
  };

  return mapping[code] || 'Unknown';
}
