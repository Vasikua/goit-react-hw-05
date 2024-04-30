import css from './MoviesPage.module.css';
import MovieList from '../../components/movieList/MovieList';
import SearchForm from '../../components/searchForm/SearchForm';
import Error from '../../components/error/Error';
import Loader from '../../components/loader/Loader';
import { useSearchParams } from 'react-router-dom';
import { getSearchMovies } from '../../../movies-API';
import { useEffect, useState } from 'react';

export default function MoviesPage() {
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchMovies, setSearchMovies] = useState([]);
    const [params, setParams] = useSearchParams();
    const query = params.get('query');
     console.log(query)
    useEffect(() => {
        if (query==="" || query===null) {
            return
        }
        async function getFetchmovies() {
            try {
                setError(false);
                setIsLoading(true);
                const data = await getSearchMovies(query);
                setSearchMovies(data.result.results);
                setParams({ query: query })
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        }
        getFetchmovies();
    }, [query, setParams]);
    const handleSerch = (query) => {
            setParams({ query: query });
    };
    return (
        <div className={css.wrapper}>
            <SearchForm className={ css.cssc} onSubmit={handleSerch} />
            {isloading && <Loader/>}
            {error && <Error />}
            {!isloading && !error && <MovieList Movies={searchMovies}/>} 
        </div>
       
    )
}