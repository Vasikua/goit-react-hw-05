import { useParams, Outlet, NavLink } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import GoBackBtn from '../../components/goBackBtn/GoBackBtn';
import Loader from '../../components/loader/Loader';
import { getMoviesDetalies } from '../../../movies-API';

import css from './MovieDetailsPage.module.css';
export default function MovieDetailsPage() {
    const {movieId} = useParams();
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
    

    
    return (  <> 
        { isloading && <Loader />}
        {!isloading && !error && moviesDetail && (
            <div className={css.container}>
                <div  className={css.filmDescribe}>
                    <div className={css.imgContainer}>
                        <GoBackBtn/>
                        <img className={css.img} src={`https://image.tmdb.org/t/p/original/${moviesDetail.result.poster_path}`} alt="title" />
                    </div>
                
                    <ul>
                        <li className={css.title}><h2>{moviesDetail.result.original_title}</h2></li>
                        <li className={css.score}>User Score:{moviesDetail.result.popularity}</li>
                        <li className={css.overview}><h3>Overview</h3></li>
                        <li className={css.overviewDescr}>{moviesDetail.result.overview}</li>
                        <li className={css.genres}><h3>Ganres</h3></li>
                        <li className={css.genresDescr}>{moviesDetail.result.genres.map(genre => genre.name).join(', ')}</li>
                    </ul>
                </div>
                <div className={css.additionalInfoCont}></div>
                <h3 className={css.title}>additional infomation</h3>
                <ul className={css.infoList}>
                    <NavLink to='cast'>
                        <li className={css.infoItem} >
                            Cast
                        </li>
                    </NavLink>
                    <NavLink to='reviews'>
                        <li className={css.infoItem}>
                            Reviews
                        </li>
                    </NavLink>
                </ul>
                <Suspense fallback={<div>please wait loading...</div>}>
                    <Outlet />
                    </Suspense>
            </div>)
        }
    </>)
}