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

const GenerateList = ({elementType = 'card', elementsList = ['default']}) => {
    const movies = useContext(MoviesContext);
    const listItems = [];

    elementsList.forEach((element, index) => {
        switch (elementType) {
            case 'card':
                const [movieId, searchId] = element.split('&');
                const movieData = movies[searchId]['Search'].find(movie => movie.imdbID === movieId);
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