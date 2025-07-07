import { useEffect, useState } from "react";

/* useMyList
 * 
 * Cuando se recibe un movieId se verifica si existe y se cambia el estado saved en useEffect
 * La funcion que devuelve permite cambiar el estado y la lista de peliculas guardadas
 * 
 * @params movieId (string)
 * @returns saved (boolean), toggleSaved (function)
*/
const useMyList = ({movieId, listname = 'myList' }) => {
    const [saved, setSaved] = useState(false);
    
    useEffect(() => {
        const list = JSON.parse(localStorage.getItem(listname)) || [];
        setSaved(list.includes(movieId));
    }, [movieId, listname]);

    const toggleSaved = () => {
        let list = JSON.parse(localStorage.getItem(listname)) || [];
        if (saved){
            list = list.filter(id => id !== movieId);
        }
        else {
            list.push(movieId);
        }
        
        localStorage.setItem(listname, JSON.stringify(list));
        setSaved(!saved);
    }

    return (
        [saved, toggleSaved]
  );
}

export default useMyList;