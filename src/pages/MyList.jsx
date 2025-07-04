import NavigationBar from "../components/NavigationBar";
import CategoryList from "../components/CategoryList";

/* MyList
 * 
 * Vista de las peliculas que se han guardado o Comprado
 * 
 * @params
 * @returns
*/

const Home = () => {
    return(
        <>
        <NavigationBar></NavigationBar>
        <h1>Guardadas</h1>
        <CategoryList></CategoryList>
        <h1>Compradas</h1>
        <CategoryList></CategoryList>
        </>
    );
}

export default Home;