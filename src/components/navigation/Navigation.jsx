import css from "./Navigation.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
export default function Navigation() {
    const getNavLink = ({isActive}) => {
        return clsx(css.link, isActive && css.active );
    }
    return (
        <nav className={css.NavLinkWrapper}>
            <NavLink  className={getNavLink} to='/'>
                Home
            </NavLink>
            <NavLink   className={getNavLink} to='/movies'>
                Movies
            </NavLink>
        </nav>
    )
}