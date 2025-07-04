import { IoBookmarkOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

/* SaveButton
 * 
 * Guarda una pelicula en My List cambiando su estado
 * 
 * @params
 * @returns
*/
const SaveButton = () => {
    
    function saveMovie(){
        console.log("Saved");
    }
    
    return (
    <div className="save">
        <NavLink onClick={saveMovie}>
            <IoBookmarkOutline/>
        </NavLink>
    </div>
  );
}

export default SaveButton;