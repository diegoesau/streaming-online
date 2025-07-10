
/* NotFound
 * 
 * Direccion no encontrada
 * 
 * @params
 * @returns
*/

const NotFound = () => {

    const myStyle = {
        color: 'white',
        fontSize: '3rem',
        padding: '5rem'
    }

    return(
        <>
        <h1 style={myStyle}> Error: Not Found </h1>
        </>
    );
}

export default NotFound;