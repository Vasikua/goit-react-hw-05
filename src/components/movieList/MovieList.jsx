import { Link, useLocation } from 'react-router-dom';

import css from './MovieList.module.css';
export default function MovieList({ Movies }) {
    const location = useLocation();
    return (
        <div>
            
            <div>
                <ul className={css.list}>
                    {Movies.map((movies) => (
                    <li key={movies.id} className={css.item}>
                            <Link to={`/movies/:${movies.id}`} state={location}>
                                <img className={css.homeImg} src={`https://image.tmdb.org/t/p/original/${movies.poster_path}`} alt="poster" />
                                <p className={css.name}>{movies.original_title}</p>
                            </Link>
                    </li>
                    )
                    )}
                </ul>
            </div>
        </div>
    )
}