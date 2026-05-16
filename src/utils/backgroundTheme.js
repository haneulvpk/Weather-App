export function getBackgroundTheme(weather) {
  const desc = weather.description.toLowerCase();
  const rainy = desc.includes('rain') || weather.hourly.some((item) => item.icon.includes('🌧'));

  if (rainy) return 'rainy';
  if (desc.includes('cloud')) return 'cloudy';

  const hour = new Date().getHours();
  if (hour >= 19 || hour < 6) return 'night';

  return 'sunny';
}
