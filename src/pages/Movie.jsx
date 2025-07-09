import { IoEyeOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import NavigationBar from "../components/NavigationBar";
import SaveButton from "../components/SaveButton";
import useRoute from "../hooks/useRoute";
import '../styles/Movie.css';

/* Movie
 * 
 * Mostrar detalles de la pelicula
 * 
 * @params
 * @returns
*/

const Movie = () => {
  const [id, , movie] = useRoute();

  return (
    <>
    <NavigationBar></NavigationBar>
    <main className="movie">
        <div className="movie__poster">
            <img src={movie.Poster} alt={movie.Title} />
        </div>

        <section className="movie__info">
                <h1 className="movie__title">{movie.Title}</h1>
                <p className="movie__director">Directed by:</p>
                <p className="movie__year">{movie.Year}</p>
                <p className="movie__plot">non minim dolor enim Lorem tempor excepteur incididunt ullamco exercitation pariatur Lorem enim fugiat esse nostrud ea irure pariatur laboris ea fugiat mollit nisi reprehenderit id non incididunt dolore culpa minim reprehenderit aliquip nisi amet incididunt excepteur culpa tempor quis magna culpa veniam minim adipisicing labore eiusmod Lorem veniam ea labore ipsum pariatur tempor est nulla veniam minim qui elit do velit excepteur ad nulla consectetur labore eiusmod sit cupidatat non aliqua pariatur ullamco reprehenderit non Lorem qui laboris laboris fugiat aliqua adipisicing reprehenderit est velit irure nostrud adipisicing tempor incididunt et aute aliquip laboris cupidatat qui irure dolore dolore</p>

            <div className="movie__action">
                <NavLink to={"/home/movie/payment/"+id} className="movie__button">
                    <IoEyeOutline/>
                    <span className="movie__button-text">Rent or Buy</span>
                </NavLink>

                <div className="movie__button movie__button--save">
                    <SaveButton movieId={id}/>
                    <span className="movie__button-text">Save</span>
                </div>
            </div>
        </section>
    </main>
    </>
  );
};

export default Movie;