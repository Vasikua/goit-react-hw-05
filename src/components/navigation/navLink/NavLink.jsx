import css from "./NavLink.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
export default function Navigation() {
    const getNavLink = ({isActive}) => {
        return clsx(css.link, isActive && css.active );
    }
    return (
        <nav>
            <NavLink  className={getNavLink} to='/'>
                Home
            </NavLink>
            <NavLink   className={getNavLink} to='/movies'>
                Movies
            </NavLink>
        </nav>
    )
}