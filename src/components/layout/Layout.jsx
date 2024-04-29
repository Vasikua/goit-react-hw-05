import css from './Layout.module.css'
import Navigation from '../navigation/navLink/NavLink';
import { Suspense } from 'react';
export default function Layout({ children }) {
    return(
        <div className={css.container}>
            <header className={css.mainNav}>
                <Navigation />
                <Suspense fallback={<div>Please wait loading page... </div>}>
                    {children}
                </Suspense>
         </header >
        
    </div>)
}