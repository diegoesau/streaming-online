import { NavLink } from "react-router-dom";
import SaveButton from "./SaveButton";
import '../styles/Card.css'

/* Card
 * 
 * Proporciona una vista miniatura de la pelicula y su titulo
 * 
 * @params
 * @returns
*/
const Card = ({ id, title, poster }) => {

    return (
    <div className="card">
        <NavLink to={"/home/movie/"+id} end> 
            <img src={poster} alt={title} className="card__image"/>
        </NavLink>
        <div className="card__info">
            <div className="card__savebutton">
              <SaveButton movieId={id} listName = 'Saved'/>
            </div>
            <NavLink to={"/home/movie/"+id} end className="card__navlink"> 
                <h3 className="card__title">{title}</h3>
            </NavLink> 
        </div>
    </div>
    );
}

export default Card;