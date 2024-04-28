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
                <div  className={css.filmDescribe}>
                <div className={css.imgContainer}>
                    <button className={css.goBackBtn}><GoArrowLeft />Go back</button>
                    <img className={css.img} src={`https://image.tmdb.org/t/p/original/${moviesDetail.result.poster_path}`} alt="title" />
                </div>
                
                <ul>
                <li className={css.item, css.title}><h2>{moviesDetail.result.original_title}</h2></li>
                <li className={css.item, css.score}>User Score:{moviesDetail.result.popularity}</li>
                <li className={css.item, css.overview}><h3>Overview</h3></li>
                <li className={css.item, css.overviewDescr}>{moviesDetail.result.overview}</li>
                <li className={css.item, css.genres}><h3>Ganres</h3></li>
                <li className={css.item, css.genresDescr}>{moviesDetail.result.genres.map(genre => genre.name).join(', ')}</li>
                    </ul>
                </div>
                <h3 className={css.titleAdditionalInfo}>additional infomation</h3>
            <ul className={css.additionalInfo}>
                <li className={css.additionalInfoItem}>text</li>
                <li className={css.additionalInfoItem}>text</li>
            </ul>
        </div> )}
        </> 
    )
}