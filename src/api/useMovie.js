import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/* useMovie
 *
 * Custom hook to fetch movie data by IMDb ID
 *
 * @returns {Object} - Contains movie data and loading state
 */

const useMovie = () => {
  const { imdbId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieByImdbId = async () => {
      try {
        const response = await fetch(`http://localhost:8762/movie-service/movies/${imdbId}`);
        if (!response.ok) throw new Error("Error fetching movie");
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movie:", error);
      } finally {
        setLoading(false);
      }
    };

    if (imdbId) {
      fetchMovieByImdbId();
    }
  }, [imdbId]);

  return { movie, loading };
};

export default useMovie;
