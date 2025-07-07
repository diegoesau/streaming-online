import NavigationBar from "../components/NavigationBar";
import GenerateList from "../components/GenerateList";

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
        <GenerateList elementType='category' elementsList={['default']}/>
        </>
    );
}

export default Home;