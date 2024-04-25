import { useEffect, useState } from 'react';
import css from './HomePage.module.css';
import { getTopMovies } from '../../../movies-API';
export default function HomePage() {
 
const[topMovies, setTopMovies]=useState([])
    useEffect(() => {
        async function fetchmovies() {
            const data = await getTopMovies(); 
         setTopMovies(data.result.results)
        }
        fetchmovies()
   },[])
  
    console.log(topMovies);
   
   
    return (
        (
        <div>
                <h1>Trending today</h1>
                <div>
                    <ul className={css.list}>
                        {topMovies.map((movies) => (
                            <li key={movies.id}>
                                <p>{movies.original_title }</p>
                            </li>
                        )
                        )}
                    </ul>
                </div>
    </div>
       
    )
    )
}