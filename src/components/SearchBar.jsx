import { useState } from 'react';
import Results from './Results';
import '../styles/SearchBar.css'
/* SearchBar
 * 
 * Barra de busqueda de titulos
 * 
 * @params
 * @returns
*/

const SearchBar = () => {
    const [input, setInput] = useState('');
    
    return (
    <>
    <form className="search-bar">
        <input
            type="text"
            placeholder="Search for movies..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="search-bar__input"
        />
        <div className="search-bar__results">
            <Results input={input} />
        </div>
    </form>
    </>
    );
}

export default SearchBar;