export function getWeatherMood(weather) {
  const description = weather.description.toLowerCase();
  const isRainy = description.includes('rain') || weather.icon.includes('🌧');

  if (isRainy) return 'Cozy rain mode activated.';
  if (weather.temperature >= 33 || weather.feelsLike >= 35) return 'Outside feels like an air fryer.';
  if (description.includes('cloud')) return 'Perfect weather for coffee and slow coding.';
  if (description.includes('clear') || weather.icon.includes('☀️')) return 'Main character walk weather.';

  return 'Soft weather, soft vibes.';
}
