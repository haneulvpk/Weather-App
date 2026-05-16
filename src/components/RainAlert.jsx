function RainAlert({ message }) {
  return (
    <section className="glass-card info-card fade-in-card">
      <h3 className="section-title">Rain alert</h3>
      <p className="info-text">{message}</p>
    </section>
  );
}

export default RainAlert;
