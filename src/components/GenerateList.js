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

const GenerateList = ({element = 'card', searchid = 0}) => {
    const movies = useContext(MoviesContext);
    const listItems = [];

    if(element === 'card')
    {
        movies[searchid]['Search'].forEach(movie =>
              listItems.push(
              <Card
              key={movie.imdbID}
              id={movie.imdbID + '&' + searchid.toString()}
              title={movie.Title}
              poster={movie.Poster}
              />));
    }
    else if (element === 'category') {
        for(let i=0; i<movies.length; i++)
        {
            listItems.push(
              <CategoryList
              key={i}
              id={i}
              />)
        }
    }
    else
    {
        console.error('Element type not recognized');
    }

  return (
  <>
  {listItems}
  </>
  );
}

export default GenerateList;