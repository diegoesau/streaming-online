import { IoBookmark , IoBookmarkOutline } from "react-icons/io5";
import useMyList from "../hooks/useMyList";
import '../styles/SaveButton.css';

/* SaveButton
 * 
 * Guarda una pelicula en My List cambiando su estado
 * 
 * @params
 * @returns
*/
const SaveButton = ({movieId, IconTrue = IoBookmark, IconFalse = IoBookmarkOutline, listName = 'Saved'}) => {
    const [saved, toggleSaved] = useMyList({movieId, listName});
    
    return (
    <div onClick={toggleSaved} className="save__button">
        {saved ? <IconTrue/> : <IconFalse/>}
    </div>
  );
}

export default SaveButton;