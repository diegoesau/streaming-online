import NavigationBar from "../components/NavigationBar";
import NewCategoryList from "../components/NewCategoryList";
import '../styles/MyList.css';
import useMyUserList from "../api/useMyUserList";

/* MyList
 * 
 * Vista de las peliculas que se han guardado, comprado o rentado
 * 
 * @params
 * @returns
*/

const MyList = () => {
    const myLists = useMyUserList('DiegoEsau');
    
    return(
        <>
        <NavigationBar></NavigationBar>
        <main className="mylist">
            <NewCategoryList categories={myLists}/>
        </main>
        </>
    );
}

export default MyList;