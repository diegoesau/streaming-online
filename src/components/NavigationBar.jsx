import { IoHomeOutline, IoSearchOutline, IoBookmarkOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useState } from 'react';
import SearchBar from "./SearchBar";
import '../styles/NavigationBar.css'
/* NavigationBar
 * 
 * Barra de navegacion con botones:
 * Home -> Pantalla principal
 * Search -> Desplegar barra de busqueda
 * My List -> Peliculas guardadas
 * 
 * @params
 * @returns
*/

const NavigationBar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  function toggleSearchBar () {
    setShowSearchBar(!showSearchBar);
  }

  return (
    <section className="navbar">
      <div className="navbar__icon__main">
        <h2>Unir</h2>
      </div>
      <nav className="navbar__icon">
        <NavLink to="/home" end>
          <IoHomeOutline />
        </NavLink>
        <NavLink onClick={toggleSearchBar}>
          <IoSearchOutline />
        </NavLink>
        <NavLink to="/home/my-list" end>
          <IoBookmarkOutline />
        </NavLink>
      </nav>
      <div>
        {showSearchBar && <SearchBar/>}
      </div>
    </section>
  );
}

export default NavigationBar;