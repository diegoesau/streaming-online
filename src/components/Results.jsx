import { useContext } from 'react';
import { MoviesContext } from './Context';
import { NavLink } from 'react-router-dom';

/* Results
 * 
 * Barra de navegacion con botones:
 * Home -> Pantalla principal
 * Search -> Desplegar barra de busqueda
 * My List -> Peliculas guardadas
 * 
 * @params
 * @returns
*/

const Results = ({input}) => {
    const movies = useContext(MoviesContext);
    let moviesData = [];
    let filteredData = [];
    
    if (input !== '' && input.length >= 3) {
        movies.forEach((search, index) => {
            search['Search'].forEach((movie) => {
                moviesData.push({
                    id: movie.imdbID + '&' + index.toString(),
                    title: movie.Title
                })
            });
        });

        filteredData = moviesData.filter(movie => 
            movie.title.toLowerCase().includes(input.toLowerCase())
        );
    }

    if (filteredData.length === 0) 
    {
        return null;
    }

    return (
    <>
    { filteredData.map((movie) => (
        <NavLink to={"/home/movie/" + movie.id} end key={movie.id} className={"results-item"}>
            <p className="results-title">{movie.title}</p>
        </NavLink>
        ))}
    </>
    );
}

export default Results;