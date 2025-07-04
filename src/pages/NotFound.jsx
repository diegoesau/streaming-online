import GenerateList from "../components/GenerateList";
/* NotFound
 * 
 * Direccion no encontrada
 * 
 * @params
 * @returns
*/

const NotFound = () => {
    return(
        <>
        <h1>Error: Not Found</h1>
        <GenerateList element="card"/>
        </>
    );
}

export default NotFound;