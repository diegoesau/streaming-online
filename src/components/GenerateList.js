import { useContext } from 'react';
import { MoviesContext } from './Context';
import CategoryList from './CategoryList';
import Card from './Card';

/* GenerateList
 * 
 * Genera una lista del objeto que se indique
 * 
 * @params
 * @returns
*/

const GenerateList = ({elementType = 'card', elementsList = ['default'], myListName = 'default'}) => {
    const movies = useContext(MoviesContext);
    const listItems = [];

    elementsList.forEach((element, index) => {
        switch (elementType) {
            case 'card':
                const [movieId, searchId] = element.split('&');
                /* Avoid errors with old localStorageData when changing json */
                const movieBlock = movies[searchId];
                if (!movieBlock || !movieBlock.Search){
                    let list = JSON.parse(localStorage.getItem(myListName)) || [];
                    list = list.filter(id => id !== element);
                    localStorage.setItem(myListName, JSON.stringify(list));
                  return;
                }
                
                const movieData = movieBlock.Search.find(movie => movie.imdbID === movieId);
                if (!movieData){
                    let list = JSON.parse(localStorage.getItem(myListName)) || [];
                    list = list.filter(id => id !== element);
                    localStorage.setItem(myListName, JSON.stringify(list));
                  return;
                }

                listItems.push(
                <Card 
                    key={movieData.imdbID}
                    id={movieData.imdbID + '&' + searchId.toString()}
                    title={movieData.Title}
                    poster={movieData.Poster}
                />);
                break;

            case 'category':
                if (element === 'default') {
                    for (let i = 0; i < movies.length; i++) {
                        listItems.push(
                            <CategoryList
                                key={i}
                                id={i}
                                name={'default'}
                            />
                        );
                    }
                }
                else {
                    listItems.push(
                        <CategoryList
                            key={element+index.toString()}
                            id={index}
                            name={element}
                        />
                    );
                }
                break;

            default:
                console.error('Element type not recognized');
                break;
        }
    });
    
    return (
    <>
    {listItems}
    </>
    );
}

export default GenerateList;