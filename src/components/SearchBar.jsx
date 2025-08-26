import { useState, useEffect } from 'react';
import Results from './Results';
import '../styles/SearchBar.css';

const SearchBar = () => {
  const [input, setInput] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (input.length < 3) {
      setResults([]);
      return;
    }

    const timeoutId = setTimeout(async () => {
      try {
        const res = await fetch(
          `http://localhost:8762/search-service/search/title?title=${encodeURIComponent(input)}`
        );
        if (!res.ok) {
          setResults([]);
          return;
        }
        const data = await res.json();
        setResults(data || []);
      } catch (err) {
        console.error('Error fetching search:', err);
        setResults([]);
      }
    }, 300); // debounce 300ms

    return () => clearTimeout(timeoutId);
  }, [input]);

  return (
    <form className="search-bar" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="Search for movies..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="search-bar__input"
      />
      <div className="search-bar__results">
        <Results results={results} />
      </div>
    </form>
  );
};

export default SearchBar;
