import { NavLink } from "react-router-dom";
import MovieStateButton from "./MovieStateButton";
import '../styles/Card.css'

/* Card
 *
 * Componente que muestra la información miniatura de una película
 *
 * @params
 * @returns
*/
const NewCard = ({ movies = [] }) => {
    const userID = 'DiegoEsau';

    return ( movies.map((movie) => (
        <div className="card" key={movie.imdbID}>
            <NavLink to={"/home/movie/"+movie.imdbID} end> 
                <img src={movie.poster} alt={movie.title} className="card__image"/>
            </NavLink>
            <div className="card__info">
                <div className="card__savebutton">
                  <MovieStateButton userID={userID} imdbID={movie.imdbID}/>
                </div>
                <NavLink to={"/home/movie/"+movie.imdbID} end className="card__navlink"> 
                    <h3 className="card__title">{movie.title}</h3>
                </NavLink> 
            </div>
        </div>
    )));
}

export default NewCard;