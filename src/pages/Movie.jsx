import { IoEyeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import SaveButton from "../hooks/SaveButton";
import '../styles/Card.css'

/* Movie
 * 
 * Mostrar detalles de la pelicula
 * 
 * @params
 * @returns
*/

const Movie = () => {
//   const { id } = useParams();
//   const movie = peliculasData.find((p) => p.id.toString() === id);
//   if (!movie) return <p>Película no encontrada</p>;

  return (
    <div className="movie">
        <NavigationBar></NavigationBar>
        <div className="movie__poster">
            <img src="https://i.pinimg.com/736x/e7/6d/8e/e76d8e871820adcfa8a42d63b7d1e21d.jpg" alt="Titulo" />
        </div>
        <div className="movie__info">
          <h1>Titulo</h1>
          <p>Año</p>
          <p>Duracion</p>
          <p>Genero</p>
          <p>Sinopsis</p>
        </div>
        <div className="movie__buttons">
          <NavLink to="/home/movie/payment">
            <IoEyeOutline/>
          </NavLink>
          <p>Ver Ahora</p>
          <SaveButton/>
          <p>Guardar</p>
        </div>
    </div>
  );
};

export default Movie;