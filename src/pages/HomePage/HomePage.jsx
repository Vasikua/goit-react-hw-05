import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import Error from '../../components/error/Error';
import { getTopMovies } from '../../../movies-API';
import Loader from '../../components/loader/Loader';
export default function HomePage() {
 
    const [topMovies, setTopMovies] = useState([]);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    useEffect(() => {
        async function getFetchmovies() {
            try {
                setError(false);
                setIsLoading(true);
                const data = await getTopMovies(); 
                setTopMovies(data.result.results);
                } catch (error) {
                setError(true);
        } finally {
                setIsLoading(false);
        }    
            
        }
        getFetchmovies()
   },[])
    console.log(topMovies);
    return (<>
        {isloading && <Loader />}
        {error && <Error/>}
        {!isloading && !error &&  
            <div>
                <h1>Trending today</h1>
                <div>
                    <ul className={css.list}>
                        {topMovies.map((movies) => (
                            <li key={movies.id}>
                            <Link to={`/movies/:${movies.id}`}><p>{movies.original_title }</p></Link>
                            </li>
                        )
                        )}
                    </ul>
                </div>
            </div>
        }
    </>)
}


  
  
  
 