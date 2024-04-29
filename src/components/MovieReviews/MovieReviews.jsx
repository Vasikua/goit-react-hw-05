import css from './MovieReviews.module.css';
import { useState, useEffect } from 'react';
import { getReviews } from '../../../movies-API';
import { useParams } from 'react-router-dom';
import Loader from '../loader/Loader';
import Error from '../error/Error';

export default function MoviesReviews( ) {
    const {movie} = useParams();
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [reviews, setReviews] = useState([]);
    const movieId = movie.slice(1);
   
    useEffect(() =>{
        async function getFetchmovies() {
            try {
                setError(false);
                setIsLoading(true);
            const data = await getReviews(movieId)
            setReviews(data.result.results);
            console.log(data.result.results);
        } catch (error) {
            setError(true);
        } finally {
            setIsLoading(false)
        }
        }
        getFetchmovies();    
    }, [movieId])
    
    return (<>
   {isloading&& <Loader/>}
        {error && <Error />}
        {!isloading && !error  &&(
            <ul>
                {reviews.length > 0 ?
                reviews.map(review => (
                    <li key={review.id} className={css.review}>
                        <h4>{review.author}</h4>
                        <p>{review.content}</p>


                    </li>
                )) : (<p>we don't have reviews</p>)}
            </ul>
        )}
    </>)
}