import NavigationBar from "../components/NavigationBar";
import GenerateList from "../components/GenerateList";

/* MyList
 * 
 * Vista de las peliculas que se han guardado o Comprado
 * 
 * @params
 * @returns
*/

const MyList = () => {
    const list = ['Saved', 'Purchased', 'Rented'];
    
    return(
        <>
        <NavigationBar></NavigationBar>
        <GenerateList elementType='category' elementsList={list}/>
        </>
    );
}

export default MyList;