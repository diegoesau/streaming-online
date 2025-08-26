import { IoBookmark, IoBookmarkOutline, IoWallet, IoWalletOutline, IoTimer, IoTimerOutline } from "react-icons/io5";
import { useMovieState } from "../api/useMovieState";
import '../styles/SaveButton.css';

const MovieStateButton = ({ userID, imdbID, actionType, returnState }) => {
  const { state, toggleStateFromHome } = useMovieState({ userID, imdbID });

  // Si actionType está presente, es Payment
  const isPayment = !!actionType;
  const currentState = isPayment ? actionType : state; // Home/MyList usa state, Payment usa actionType

  const handleClick = () => {
    // Home/MyList toggle: solo SAVED - NONE
    if (!isPayment && toggleStateFromHome) {
      toggleStateFromHome();
    }
    // Payment: devuelve true si se seleccionó el botón
    if (isPayment && returnState) {
      returnState(currentState === actionType ? true : false);
    }
  };

  // Iconos según estado
  switch (currentState) {
    case "RENTED":
      return <span className="state__button" onClick={handleClick}>{isPayment ? <IoTimerOutline /> : <IoTimer />}</span>;
    case "PURCHASED":
      return <span className="state__button" onClick={handleClick}>{isPayment ? <IoWalletOutline /> : <IoWallet />}</span>;
    case "SAVED":
      return <span className="state__button" onClick={handleClick}><IoBookmark /></span>;
    default:
      // NONE
      if (isPayment) {
        if (actionType === "PURCHASED") return <span className="state__button" onClick={handleClick}><IoWalletOutline /></span>;
        if (actionType === "RENTED") return <span className="state__button" onClick={handleClick}><IoTimerOutline /></span>;
      }
      return <span className="state__button" onClick={handleClick}><IoBookmarkOutline /></span>;
  }
};

export default MovieStateButton;
