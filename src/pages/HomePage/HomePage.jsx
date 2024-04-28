import { useEffect, useState } from 'react';
import MovieList from '../../components/movieList/MovieList';
import css from './HomePage.module.css';
import { getTopMovies } from '../../../movies-API';
import Error from '../../components/error/Error';
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
    }, [])
   
    return (<>
        <h1 className={css.title}>Trending today</h1>
        {isloading && <Loader/>}
        {error && <Error />}
        {!isloading && !error && <MovieList Movies={topMovies }/>} 
    </>)
}


  
  
  
 