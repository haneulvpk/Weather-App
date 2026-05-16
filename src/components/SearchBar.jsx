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
        placeholder="Search city..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
      <button className="search-button" type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
