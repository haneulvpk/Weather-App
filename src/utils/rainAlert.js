function hasRainInNextHours(hourly = []) {
  return hourly.some((item) => item.icon.includes('🌧'));
}

function firstRainTime(hourly = []) {
  const rainItem = hourly.find((item) => item.icon.includes('🌧'));
  return rainItem ? rainItem.time : null;
}

export function getRainAlert(hourly) {
  if (!hasRainInNextHours(hourly)) {
    return 'Sắp tới chưa mưa. Ra ngoài thoải mái ✨';
  }

  const rainTime = firstRainTime(hourly);
  return `Tầm ${rainTime} sẽ có mưa. Nhớ mang ô ☔`;
}
