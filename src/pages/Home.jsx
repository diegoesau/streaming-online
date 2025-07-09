import NavigationBar from "../components/NavigationBar";
import GenerateList from "../components/GenerateList";
import '../styles/Home.css';

/* Home
 * 
 * Vista principal al ingresar a la app
 * 
 * @params
 * @returns
*/

const Home = () => {
    return(
        <>
        <NavigationBar/>
        <main className="home">
            <GenerateList elementType='category' elementsList={['default']}/>
        </main>
        </>
    );
}

export default Home;