import GenerateList from './GenerateList';
import { useState, useEffect, useContext} from 'react';
import { MoviesContext } from './Context';
import '../styles/CategoryList.css'

/* CartegoryList
 * 
 * Vista de un conjunto de Cards del mismo genero o categoria
 * 
 * @params
 * @returns
*/

const CategoryList = ({id = 0, name = 'default'}) => {
    const [list, setList] = useState([]);
    const movies = useContext(MoviesContext);

    useEffect(() => {
        let list = [];
        if (name === 'default') {
            movies[id]['Search'].forEach(movie =>
                list.push(movie.imdbID + '&' + id.toString())
            );
        }
        else {
            list = JSON.parse(localStorage.getItem(name)) || [];
        }
        setList(list);
    }, [id, name, movies]);

    return (
    <section className="category">
        <h2 className="category__title"> {name === 'default' ? 'Movies ' + id: name} </h2>
        <div className="category__list">
            {!list.length ? 
            <p className="category__empty"> Your list is empty </p> : 
            <GenerateList elementType='card' elementsList={list}/>
            }
        </div>
    </section>
    );
}

export default CategoryList;
