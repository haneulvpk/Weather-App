function OutfitSuggestion({ suggestion }) {
  return (
    <section className="glass-card info-card fade-in-card">
      <h3 className="section-title">Outfit suggestion</h3>
      <p className="info-text">{suggestion}</p>
    </section>
  );
}

export default OutfitSuggestion;
