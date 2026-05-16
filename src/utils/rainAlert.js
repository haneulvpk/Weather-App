function hasRainInNextHours(hourly = []) {
  return hourly.some((item) => item.icon.includes('🌧'));
}

function firstRainTime(hourly = []) {
  const rainItem = hourly.find((item) => item.icon.includes('🌧'));
  return rainItem ? rainItem.time : null;
}

export function getRainAlert(hourly) {
  if (!hasRainInNextHours(hourly)) {
    return 'No rain soon. Safe to go outside ✨';
  }

  const rainTime = firstRainTime(hourly);
  return `Rain starts around ${rainTime}. Bring an umbrella ☔`;
}
