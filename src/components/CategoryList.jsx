import GenerateList from "../components/GenerateList";
import '../styles/CategoryList.css'

/* CartegoryList
 * 
 * Vista de un conjunto de Cards del mismo genero o categoria
 * 
 * @params
 * @returns
*/

const CategoryList = ({id}) => {
  return (
    <section className="category">
        <h2 className="category__title"> Peliculas {id} </h2>
        <div className="category__list">
          <GenerateList element="card" searchid={id}/>
        </div>
    </section>
  );
}

export default CategoryList;
