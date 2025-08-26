import NavigationBar from "../components/NavigationBar";
import NewCategoryList from "../components/NewCategoryList";
import '../styles/Home.css';
import useGenreList from "../api/useGenreList";

/* Home
 * 
 * Vista principal al ingresar a la app
 * 
 * @params
 * @returns
*/

const Home = () => {
    const genreList = useGenreList();
    return(
        <>
        <NavigationBar/>
        <main className="home">
            <NewCategoryList categories={genreList}/>
        </main>
        </>
    );
}

export default Home;