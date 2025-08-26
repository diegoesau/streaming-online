import { IoTicket, IoLogoYoutube } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import { useMovieState } from "../api/useMovieState";
import useMovie from "../api/useMovie";
import '../styles/Movie.css';
import MovieStateButton from "../components/MovieStateButton";

/* Movie
 * 
 * Mostrar detalles de la pelicula
 * 
 * @params
 * @returns
*/

const NewMovie = () => {
    const userID = "DiegoEsau"; 
    const { movie, loading } = useMovie();
    const { state } = useMovieState({userID,imdbID: movie ? movie.imdbID : null});

    if (loading) {
      return <div>Loading...</div>;
    }
    else if (!movie) {
      return <div>Movie not found</div>;
    }
  
    const trailer = "https://www.youtube.com/results?search_query=" + movie.title.replaceAll(" ", "+") + "+" + movie.year +"+trailer";
    
  
    return (
    <>
    <NavigationBar></NavigationBar>
    <main className="movie">
        <div className="movie__poster">
            <img src={movie.poster} alt={movie.title} />
        </div>

        <section className="movie__info">
                <h1 className="movie__title">{movie.title}</h1>
                <p className="movie__year">{movie.year}</p>
                <p className="movie__director">Directed by: {movie.director}</p>
                <p className="movie__director">Cast: {movie.actors}</p>
                <p className="movie__director">Genre: {movie.genre}</p>
                <p className="movie__plot">{movie.plot}</p>
                <p className="movie__director">Runtime: {movie.runtime}</p>
                <p className="movie__director">Rating: {movie.imdbRating !== null ? movie.imdbRating : "No data"}</p>

            <div className="movie__action">
                {state !== "RENTED" && state !== "PURCHASED" && (
                    <NavLink to={`/home/movie/payment/${movie.imdbID}`} className="movie__button">
                        <span className="movie__button-icon"><IoTicket/></span>
                        <span className="movie__button-text">Rent or Buy</span>
                        </NavLink>
                    )}

                <div className="movie__button">
                    <span className="movie__button-icon-save"><MovieStateButton userID={userID} imdbID={movie.imdbID} /></span>
                    <span className="movie__button-text">
                        {state === "SAVED" || state === "RENTED" || state === "PURCHASED"
                            ? "Remove"
                            : "Save"}
                    </span>
                </div>
                    

                <a href={trailer} target="_blank" rel="noopener noreferrer" className="movie__button">
                    <span className="movie__button-icon"><IoLogoYoutube/></span>
                    <span className="movie__button-text">Trailer</span>
                </a>
            </div>
        </section>
    </main>
    </>
  );
};

export default NewMovie;