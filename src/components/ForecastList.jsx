function ForecastList({ hourly }) {
  return (
    <section className="forecast-section">
      <h3 className="section-title">Hourly forecast</h3>
      <div className="forecast-scroll" role="list">
        {hourly.map((item) => (
          <article key={item.time} className="glass-card forecast-card" role="listitem">
            <p className="forecast-time">{item.time}</p>
            <p className="forecast-icon" aria-hidden="true">{item.icon}</p>
            <p className="forecast-temp">{item.temperature}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ForecastList;
