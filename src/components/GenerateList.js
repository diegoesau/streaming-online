import { useContext } from 'react';
import { moviesContext } from './Context';
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
    const movies = useContext(moviesContext);
    const listItems = [];

    if(element === 'card')
    {
        movies[searchid]['Search'].forEach(movie =>
              listItems.push(
              <Card
              key={movie.imdbID}
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
    };

  return (
  <>
  {listItems}
  </>
  );
}

export default GenerateList;