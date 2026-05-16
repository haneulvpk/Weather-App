function SearchBar({ value, onChange, onSearch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <form className="search-section" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="Tìm thành phố..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <button className="search-button" type="submit">Tìm</button>
    </form>
  );
}

export default SearchBar;
