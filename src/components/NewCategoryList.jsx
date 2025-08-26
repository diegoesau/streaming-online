
import NewCard from './NewCard';
import '../styles/CategoryList.css'

/* NewCategoryList
 *
 * Componente que genera una lista de categorias con sus respectivas peliculas
 * 
 * @params
 * @returns
*/

const NewCategoryList = ({categories = ['default']}) => {
    return ( categories.map( (category) =>
        <section className="category" key={category.name}>
            <h2 className="category__title"> {category.name} </h2>
            <div className="category__list">
                {category.movies.length === 0 ?
                <p className="category__empty"> Your list is empty </p> :
                <NewCard movies={category.movies}/>
                }
            </div>
        </section>
    ));
}

export default NewCategoryList;