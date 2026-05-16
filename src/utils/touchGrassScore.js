function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

export function getTouchGrassScore(weather) {
  let score = 10;

  const rainy = weather.description.toLowerCase().includes('rain') || weather.hourly.some((item) => item.icon.includes('🌧'));
  if (rainy) score -= 3;

  if (weather.temperature >= 34 || weather.temperature <= 16) score -= 3;
  else if (weather.temperature >= 31 || weather.temperature <= 20) score -= 2;

  if (weather.humidity >= 85) score -= 2;
  else if (weather.humidity >= 75) score -= 1;

  if (weather.windSpeed >= 20) score -= 2;
  else if (weather.windSpeed >= 14) score -= 1;

  const finalScore = clamp(score, 1, 10);

  if (finalScore >= 8) {
    return {
      score: finalScore,
      summary: 'Đi ra ngoài hôm nay khá lý tưởng đó.',
    };
  }

  if (finalScore >= 5) {
    return {
      score: finalScore,
      summary: 'Đi dạo ngắn thì ổn, chọn giờ cho khéo.',
    };
  }

  return {
    score: finalScore,
    summary: 'Hôm nay mode ở trong nhà sẽ hợp hơn.',
  };
}
