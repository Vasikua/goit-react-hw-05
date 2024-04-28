import css from './MoviesPage.module.css';
import MovieList from '../../components/movieList/MovieList';
import SearchForm from '../../components/searchForm/SearchForm';
import Error from '../../components/error/Error';
import Loader from '../../components/loader/Loader';
import { getSearchMovies } from '../../../movies-API';
import { useEffect, useState } from 'react';
export default function MoviesPage() {
    const [query, setQuery] = useState('');
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchMovies, setSearchMovies] = useState([]);
    const handleSerch = (query) => {
        setQuery(query);
    }
    
    useEffect(() => {
      
        if (query === '') {
            console.log('empty field')
            return
        }
        async function getFetchmovies() {
            try {
                setError(false);
                setIsLoading(true);
                const data = await getSearchMovies(query);
           
                setSearchMovies(data.result.results);
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getFetchmovies();
    },[query])
    return (
        <div className={css.wrapper}>
            <SearchForm className={ css.cssc} onSubmit={handleSerch} />
            {isloading && <Loader/>}
            {error && <Error />}
            {!isloading && !error && <MovieList Movies={searchMovies}/>} 
        </div>
       
    )
}