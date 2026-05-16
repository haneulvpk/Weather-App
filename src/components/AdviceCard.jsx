function AdviceCard({ advice }) {
  return (
    <section className="glass-card advice-card">
      <h3 className="section-title">Today’s advice</h3>
      <p className="advice-text">{advice}</p>
    </section>
  );
}

export default AdviceCard;
