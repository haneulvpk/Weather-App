function WeatherCard({ weather, mood }) {
  return (
    <section className="glass-card weather-card fade-in-card">
      <div className="weather-icon" aria-hidden="true">{weather.icon}</div>
      <p className="temperature">{weather.temperature}°</p>
      <h2 className="city-name">{weather.city}</h2>
      <p className="weather-description">{weather.description}</p>
      <p className="weather-mood">{mood}</p>
    </section>
  );
}

export default WeatherCard;
