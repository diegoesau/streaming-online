import { NavLink } from "react-router-dom";
import SaveButton from "../hooks/SaveButton";
import '../styles/Card.css'

/* Card
 * 
 * Proporciona una vista miniatura de la pelicula y su titulo
 * 
 * @params
 * @returns
*/
const Card = ({ title, poster }) => {
  return (
    <div className="card">
      <NavLink to="/home/movie" end>
        <img
        src={poster}
        alt={title}
        className="card__image"/>
        <h3 className="card__title">{title}</h3>
      </NavLink>
      <div className="card__savebutton">
        <SaveButton/>
      </div>
    </div>
  );
}

export default Card;