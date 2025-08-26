import { NavLink } from 'react-router-dom';
import '../styles/SearchBar.css';

const Results = ({ results }) => {
  // Si results es undefined o null, usamos array vacío
  const movies = results || [];

  if (movies.length === 0) return null;

  return (
    <>
      {movies.map((movie) => (
        <NavLink
          to={"/home/movie/" + movie.imdbID}
          key={movie.imdbID}
          className="results-item"
        >
          <p className="results-title">{movie.title}</p>
        </NavLink>
      ))}
    </>
  );
};

export default Results;
