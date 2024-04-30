import css from './Layout.module.css'
import Navigation from '../navigation/Navigation';
import { Suspense } from 'react';
import Loader from '../loader/Loader';
export default function Layout({ children }) {
    return(
        <div className={css.container}>
            <header className={css.mainNav}>
                <Navigation />
                <Suspense fallback={<Loader/>}>
                    {children}
                </Suspense>
         </header >
        
    </div>)
}