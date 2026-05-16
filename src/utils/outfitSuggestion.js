function isRainy(hourly = [], weather) {
  return weather.description.toLowerCase().includes('rain') || hourly.some((item) => item.icon.includes('🌧'));
}

export function getOutfitSuggestion(weather) {
  if (isRainy(weather.hourly, weather)) {
    return 'Bring an umbrella and wear water-friendly shoes.';
  }

  if (weather.temperature >= 32) {
    return 'Oversized tee, shorts, and sunscreen.';
  }

  if (weather.temperature >= 27) {
    return 'T-shirt, light pants, and sneakers.';
  }

  if (weather.temperature <= 20) {
    return 'Hoodie or light jacket recommended.';
  }

  return 'Light layers are enough for today.';
}
