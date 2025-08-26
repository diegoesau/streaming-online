import { useState, useEffect } from "react";

export function useMovieState({ userID, imdbID }) {
  const [state, setState] = useState(null); // null = NONE

  // Obtener estado actual
    useEffect(() => {
    if (!imdbID) return;
    setState(null);

    const fetchState = async () => {
      try {
        const res = await fetch(
          `http://localhost:8762/movie-service/movies/state/${userID}/${imdbID}`
        );

        if (res.status === 200) {
          const data = await res.json();
          setState(data.state);
        } else if (res.status === 404) {
          setState(null);
        }
      } catch (err) {
        console.error("Error en fetch:", err);
      }
    };

    fetchState();
  }, [userID, imdbID]);

  // Toggle desde Home
  const toggleStateFromHome = async () => {
    try {
      if (state === null) {
        // NONE -> SAVED
        const res = await fetch(
          `http://localhost:8762/movie-service/movies/mylist/${userID}/${imdbID}/SAVED`,
          { method: "PATCH" }
        );
        if (res.ok) setState("SAVED");
      } else {
        // Cualquier estado -> NONE (DELETE)
        const res = await fetch(
          `http://localhost:8762/movie-service/movies/mylist/${userID}/${imdbID}`,
          { method: "DELETE" }
        );
        if (res.ok) setState(null);
      }
    } catch (err) {
      console.error("Error al cambiar estado:", err);
    }
  };

  return { state, toggleStateFromHome };
}
