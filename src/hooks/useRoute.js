import { useParams } from "react-router-dom";
import { MoviesContext } from '../components/Context';
import { useContext } from "react";

/* useRoute
 * 
 * Determina la ruta de la pelicula que se va a mostrar, conserva datos en storage
 * 
 * @params
 * @returns
*/

const useRoute = () => {
    const { id } = useParams();
    const movies = useContext(MoviesContext);
    const movieId = id === undefined ? '' : id.split('&')[0];
    const searchId = id === undefined ? '' : id.split('&')[1];
    let movieData = {};
    
    if (movies === undefined || !movies[searchId] || !movies[searchId]['Search']) 
    {
        movieData = JSON.parse(localStorage.getItem('movieData'));
    }
    else 
    {
        movieData = movies[searchId]['Search'].find(movie => movie.imdbID === movieId);
        localStorage.setItem('movieData', JSON.stringify(movieData));
    }

    return(
        [id, movieId, movieData]
    );
}

export default useRoute;