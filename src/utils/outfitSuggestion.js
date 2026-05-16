function isRainy(hourly = [], weather) {
  return weather.description.toLowerCase().includes('rain') || hourly.some((item) => item.icon.includes('🌧'));
}

export function getOutfitSuggestion(weather) {
  if (isRainy(weather.hourly, weather)) {
    return 'Mang ô và đi giày chống nước nhé.';
  }

  if (weather.temperature >= 32) {
    return 'Áo thun rộng, quần short, thêm kem chống nắng.';
  }

  if (weather.temperature >= 27) {
    return 'Áo thun, quần nhẹ, giày sneaker là ổn.';
  }

  if (weather.temperature <= 20) {
    return 'Nên có hoodie hoặc áo khoác mỏng.';
  }

  return 'Mặc layer nhẹ là vừa đẹp.';
}
