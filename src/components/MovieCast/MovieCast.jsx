import { useEffect, useState } from 'react';
import { getCast } from '../../../movies-API';
import Error from '../../components/error/Error';
import Loader from '../loader/Loader';
import css from './MovieCast.module.css';
import { useParams } from 'react-router-dom';

export default function MovieCast() {
    const { movieId } = useParams();
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(false); 
    const [casts, setCasts] = useState([]);
      
    useEffect(() => {
        async function getFetchmovies() {
            try {
                setError(false);
                setIsLoading(true);
                const data = await getCast(movieId)
                setCasts(data.result.cast)
                 console.log(data.result.cast);
            } catch (error) {
                 setError(true);
            } finally {
            setIsLoading(false)
        }
        } 
        getFetchmovies();
    },[movieId])
    
    return (<>
        {isloading&& <Loader/>}
        {error && <Error />}
        {!isloading && !error && (
            <ul className={css.castList}>
                {  casts.length > 0 ?
                    casts.map((cast) => (
                            <li key={cast.id} className={css.castItem}>
                                <img className={css.img} src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`} alt="poster" />
                                <p className={css.actorName}>{cast.original_name}</p>
                                <p>Rate: {cast.popularity}</p>
                            </li>
                          )) : (<p> no cast </p>)
                }
                </ul>
            )}
    </>)
}