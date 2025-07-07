import { IoEyeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import SaveButton from "../components/SaveButton";
import useRoute from "../hooks/useRoute";
import '../styles/Card.css'
/* Movie
 * 
 * Mostrar detalles de la pelicula
 * 
 * @params
 * @returns
*/

const Movie = () => {
  const [id, movieId, movie] = useRoute();

  return (
    <div className="movie">
        <NavigationBar></NavigationBar>
        <div className="movie__poster">
            <img src={movie.Poster} alt={movie.Title} />
        </div>
        <div className="movie__info">
          <h1>{movie.Title}</h1>
          <p>{movie.Year}</p>
        </div>
        <div className="movie__buttons">
          <NavLink to={"/home/movie/payment/"+id}>
            <IoEyeOutline/>
          </NavLink>
          <p>Ver Ahora</p>
          <SaveButton movieId={id}/>
          <p>Guardar</p>
        </div>
    </div>
  );
};

export default Movie;