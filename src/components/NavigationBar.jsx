import { IoHomeOutline, IoSearchOutline, IoBookmarkOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import useRoute from "../hooks/useRoute";
import unir from "../assets/UNIR.png";
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
    const [id, , ] = useRoute();

    useEffect(() => {
      setShowSearchBar(false);
    },[id]);

    function toggleSearchBar () {
      setShowSearchBar(!showSearchBar);
    }

    return (
        <>
        <section className="navbar">
            <div className="navbar__logo">
                <img src={unir} alt="UNIR Logo" className="navbar__logo-image"/>
            </div>
            
            <nav className="navbar__menu">
                <NavLink to="/home" end>
                    <span className="navbar__icon"><IoHomeOutline /></span>
                </NavLink>
    
                <NavLink onClick={toggleSearchBar}>
                    <span className="navbar__icon"><IoSearchOutline /></span>
                </NavLink>
    
                <NavLink to="/home/my-list" end>
                    <span className="navbar__icon"><IoBookmarkOutline /></span>
                </NavLink>
            </nav>
        </section>
    
        {showSearchBar && 
        <div className="floating__search">
            <SearchBar/>
        </div>}
        </>
    );
}

export default NavigationBar;