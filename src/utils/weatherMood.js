export function getWeatherMood(weather) {
  const description = weather.description.toLowerCase();
  const isRainy = description.includes('rain') || weather.icon.includes('🌧');

  if (isRainy) return 'Bật chế độ mưa chill.';
  if (weather.temperature >= 33 || weather.feelsLike >= 35) return 'Ra ngoài như ngồi cạnh nồi chiên không dầu.';
  if (description.includes('cloud')) return 'Trời này hợp cà phê và code chậm rãi.';
  if (description.includes('clear') || weather.icon.includes('☀️')) return 'Thời tiết chuẩn đi dạo main character.';

  return 'Thời tiết dịu, tâm trạng cũng dịu.';
}
