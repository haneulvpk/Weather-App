function TouchGrassScore({ score, summary }) {
  return (
    <section className="glass-card info-card fade-in-card touch-grass-card">
      <h3 className="section-title">Điểm chạm cỏ</h3>
      <p className="touch-score">{score}/10</p>
      <p className="info-text">{summary}</p>
    </section>
  );
}

export default TouchGrassScore;
