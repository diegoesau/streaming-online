import '../styles/SearchBar.css'
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

const SearchBar = () => {
  return (
    <form className="search-bar">
      <input
        type="text"
        className="search-bar__input"
        placeholder="Buscar películas..."
      />
    </form>
  );
}

export default SearchBar;