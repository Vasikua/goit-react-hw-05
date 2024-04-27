import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { GoArrowLeft } from "react-icons/go";
import Loader from '../loader/Loader';
import { getMoviesDetalies } from '../../../movies-API';
import css from './MovieDetailsPage.module.css';
export default function MovieDetailsPage() {
    const {movie} = useParams();
    const movieId = movie.slice(1);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [moviesDetail, setMoviesDetail] = useState(null);
   
    useEffect(() => {
        async function getFetchMoviesById() {
            try { 
                setError(false);
                setIsLoading(true);
                const data = await getMoviesDetalies(movieId);
                setMoviesDetail(data);
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
                
            }
        } 
        getFetchMoviesById();
    }, [movieId]) 
    
   console.log(moviesDetail)
    
    return (  <> 
        { isloading && <Loader />}
        {!isloading && !error && moviesDetail && (
            <div className={css.container}>
                
                <div className={css.imgContainer}>
                    <button className={css.goBackBtn}><GoArrowLeft />Go back</button>
            <img className={css.img} src={`https://image.tmdb.org/t/p/original/${moviesDetail.result.poster_path}`} alt="title" />
                </div>
                
                <ul className={css.filmDescribe}>
                <li className={css.item, css.title}>{moviesDetail.result.original_title}</li>
                <li className={css.item, css.score}>User Score:{moviesDetail.result.popularity}</li>
                <li className={css.item, css.overview}>Overview</li>
                <li className={css.item, css.overviewDescr}>{moviesDetail.result.overview}</li>
                <li className={css.item, css.genres}>Ganres</li>
                <li className={css.item, css.genresDescr}>{moviesDetail.result.genres.map(genre => genre.name).join(', ')}</li>
            </ul>
            {/* <ul className={css.additionalInfo}>
                <li className={css.additionalInfoItem}>{movieId.}</li>
                <li className={css.additionalInfoItem}>{movieId.}</li>
            </ul> */}
        </div> )}
        </> 
    )
}