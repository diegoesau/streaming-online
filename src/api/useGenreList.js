import { useEffect, useState, useRef } from "react";
/* useGenreList
 *
 * Devuelve las listas de géneros
 *
 * @params movieId (string)
 * @returns genreList (array)
*/
const useGenreList = () => {
  const [genreList, setGenreList] = useState([]);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    fetch("http://localhost:8762/movie-service/movies/genres")
      .then(res => res.json())
      .then(setGenreList)
      .catch(console.error);
  }, []);

  return genreList;
};

export default useGenreList;
