import { useEffect, useState } from "react";

/* useMyUserList
 * 
 * Devuelve las listas del usuario
 * 
 * @params movieId (string)
 * @returns saved (boolean), toggleSaved (function)
*/
const useMyUserList = ({userName = 'DiegoEsau' }) => {
    const [myMoviesList, setMyMoviesList] = useState([]);

    useEffect(() => {
        const fetchAllMovies = async () => {
            try {
                const response = await fetch(`http://localhost:8762/movie-service/movies/mylist/${userName}`);
                const data = await response.json();
                setMyMoviesList(data);
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchAllMovies();
    }, [userName]);

    return(myMoviesList);
}

export default useMyUserList;
