import { createContext, useState, useEffect } from 'react';
import movies from '../assets/movies.json'

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    setMoviesData(movies); // JSON File
  }, []);

  return (
    <MoviesContext.Provider value={moviesData}>
      {children}
    </MoviesContext.Provider>
  );
}