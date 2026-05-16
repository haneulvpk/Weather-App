/**
 * Weather API Service
 * Handles all API calls to OpenWeatherMap
 * 
 * API Documentation:
 * https://api.openweathermap.org/data/2.5/weather
 */

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const API_BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

/**
 * Fetch weather data for a specific city
 * @param {string} city - City name
 * @returns {Promise<Object>} Weather data object
 */
export async function getWeatherByCity(city) {
  // Placeholder for API integration
  // Will be implemented with actual API call:
  // const params = new URLSearchParams({
  //   q: city,
  //   appid: API_KEY,
  //   units: 'metric',
  //   lang: 'vi'
  // });
  // const response = await fetch(`${API_BASE_URL}?${params}`);
  // return await response.json();

  if (!city) {
    throw new Error('City name is required');
  }

  if (!API_KEY) {
    throw new Error('API key is not configured. Please set VITE_OPENWEATHER_API_KEY in .env');
  }

  try {
    const params = new URLSearchParams({
      q: city,
      appid: API_KEY,
      units: 'metric',
      lang: 'vi',
    });

    const response = await fetch(`${API_BASE_URL}?${params}`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('City not found');
      } else if (response.status === 401) {
        throw new Error('Invalid API key');
      } else {
        throw new Error('Failed to fetch weather data');
      }
    }

    const data = await response.json();

    // Transform API response to match our data structure
    return {
      city: data.name,
      country: data.sys.country,
      temperature: data.main.temp,
      description: data.weather[0].main,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
    };
  } catch (error) {
    console.error('Weather API Error:', error);
    throw error;
  }
}
