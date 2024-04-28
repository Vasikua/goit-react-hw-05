import { Link } from 'react-router-dom';
import css from './MovieList.module.css';
export default function MovieList({Movies}) {
    return (
        <div>
            
            <div>
                <ul className={css.list}>
                    {Movies.map((movies) => (
                    <li key={movies.id}>
                      <Link to={`/movies/:${movies.id}`}><p>{movies.original_title }</p></Link>
                    </li>
                    )
                    )}
                </ul>
            </div>
        </div>
    )
}