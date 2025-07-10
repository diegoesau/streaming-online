import NavigationBar from "../components/NavigationBar";
import GenerateList from "../components/GenerateList";
import '../styles/MyList.css';

/* MyList
 * 
 * Vista de las peliculas que se han guardado, comprado o rentado
 * 
 * @params
 * @returns
*/

const MyList = () => {
    const list = ['Saved', 'Purchased', 'Rented'];
    
    return(
        <>
        <NavigationBar></NavigationBar>
        <main className="mylist">
            <GenerateList elementType='category' elementsList={list}/>
        </main>
        </>
    );
}

export default MyList;