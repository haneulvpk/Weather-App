import { useEffect, useMemo, useRef, useState } from 'react';

/**
 * SearchBar Component
 * Handles user input for city search
 */
function SearchBar({
  onSearch,
  onUseMyLocation,
  onSelectHistory,
  recentSearches,
  cityOptions = [],
  isLoading,
}) {
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = useMemo(() => {
    const keyword = input.trim().toLowerCase();
    if (!keyword) return cityOptions.slice(0, 20);
    return cityOptions
      .filter((city) => city.toLowerCase().includes(keyword))
      .slice(0, 30);
  }, [cityOptions, input]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input);
      setIsOpen(false);
    }
  };

  const handleSelectCity = (city) => {
    setInput(city);
    onSearch(city);
    setIsOpen(false);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="combo-box" ref={wrapperRef}>
        <input
          type="text"
          placeholder="Enter city name..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          disabled={isLoading}
          className="search-input combo-input"
        />
        <button
          type="button"
          className="combo-toggle"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle city list"
          disabled={isLoading}
        >
          ▾
        </button>
        {isOpen && filteredOptions.length > 0 && (
          <div className="combo-menu">
            {filteredOptions.map((city) => (
              <button
                key={city}
                type="button"
                className="combo-option"
                onClick={() => handleSelectCity(city)}
              >
                {city}
              </button>
            ))}
          </div>
        )}
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="search-button"
      >
        {isLoading ? 'Searching...' : 'Search'}
      </button>
      <button
        type="button"
        disabled={isLoading}
        className="search-button location-button"
        onClick={onUseMyLocation}
      >
        My location
      </button>

      {recentSearches.length > 0 && (
        <div className="search-history">
          {recentSearches.map((city) => (
            <button
              key={city}
              type="button"
              className="history-chip"
              onClick={() => onSelectHistory(city)}
              disabled={isLoading}
            >
              {city}
            </button>
          ))}
        </div>
      )}
    </form>
  );
}

export default SearchBar;
