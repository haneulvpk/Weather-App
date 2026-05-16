const GEO_URL = 'https://geocoding-api.open-meteo.com/v1/search';
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast';

const WEATHER_CODE_TO_TEXT = {
  0: 'Clear',
  1: 'Mainly clear',
  2: 'Partly cloudy',
  3: 'Cloudy',
  45: 'Foggy',
  48: 'Foggy',
  51: 'Light drizzle',
  53: 'Drizzle',
  55: 'Heavy drizzle',
  61: 'Light rain',
  63: 'Rainy',
  65: 'Heavy rain',
  71: 'Light snow',
  73: 'Snowy',
  75: 'Heavy snow',
  80: 'Rain showers',
  81: 'Rain showers',
  82: 'Heavy showers',
  95: 'Thunderstorm',
};

function codeToEmoji(code) {
  if ([0, 1].includes(code)) return '☀️';
  if ([2, 3].includes(code)) return '☁️';
  if ([45, 48].includes(code)) return '🌫️';
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return '🌧️';
  if ([71, 73, 75].includes(code)) return '❄️';
  if (code === 95) return '⛈️';
  return '☁️';
}

function to12HourLabel(hour24) {
  const suffix = hour24 >= 12 ? 'PM' : 'AM';
  const hour = hour24 % 12 || 12;
  return `${hour}${suffix}`;
}

async function fetchJson(url, errorMessage) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(errorMessage);
  }
  return response.json();
}

async function geocodeCity(city) {
  const params = new URLSearchParams({
    name: city.trim(),
    count: '1',
    language: 'en',
    format: 'json',
  });

  const data = await fetchJson(`${GEO_URL}?${params}`, 'Failed to find city');
  const place = data.results?.[0];

  if (!place) {
    throw new Error('City not found');
  }

  return {
    name: place.name,
    latitude: place.latitude,
    longitude: place.longitude,
  };
}

export async function getWeatherByCity(city) {
  if (!city?.trim()) {
    throw new Error('City name is required');
  }

  const location = await geocodeCity(city);
  const params = new URLSearchParams({
    latitude: String(location.latitude),
    longitude: String(location.longitude),
    current: 'temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code',
    hourly: 'temperature_2m,weather_code',
    forecast_days: '1',
    timezone: 'auto',
  });

  const data = await fetchJson(`${FORECAST_URL}?${params}`, 'Failed to fetch weather data');
  const current = data.current;

  const currentHour = Number(data.current.time.slice(11, 13));
  const startIndex = data.hourly.time.findIndex((value) => value.endsWith(`T${String(currentHour).padStart(2, '0')}:00`));
  const safeStartIndex = startIndex >= 0 ? startIndex : 0;

  const hourly = data.hourly.time.slice(safeStartIndex, safeStartIndex + 5).map((time, idx) => {
    const hourPart = Number(time.slice(11, 13));
    const temp = data.hourly.temperature_2m[safeStartIndex + idx];
    const code = data.hourly.weather_code[safeStartIndex + idx];

    return {
      time: to12HourLabel(hourPart),
      icon: codeToEmoji(code),
      temperature: `${Math.round(temp)}°`,
    };
  });

  return {
    city: location.name,
    temperature: Math.round(current.temperature_2m),
    description: WEATHER_CODE_TO_TEXT[current.weather_code] || 'Cloudy',
    icon: codeToEmoji(current.weather_code),
    humidity: Math.round(current.relative_humidity_2m),
    windSpeed: Math.round(current.wind_speed_10m),
    feelsLike: Math.round(current.apparent_temperature),
    advice: '',
    hourly,
  };
}
