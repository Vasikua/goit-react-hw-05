import css from './Layout.module.css'
import Navigation from '../navigation/navLink/NavLink';
export default function Layout({ children }) {
    return(
        <div className={css.container}>
            <header className={css.mainNav}>
                <Navigation />
                
         </header >
        {children}
    </div>)
}