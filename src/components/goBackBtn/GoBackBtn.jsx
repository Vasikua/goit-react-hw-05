import css from './GoBackBtn.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useRef } from 'react';
import { GoArrowLeft } from "react-icons/go";

export default function GoBackBtn() {
    const location = useLocation();
    const goBackBtn = useRef(location.state ?? '/')
    
    return (<>
        <Link to={goBackBtn.current}>
            <button className={css.goBackBtn}>
                <GoArrowLeft className={css.svg} />
               <span className={css.text}>Go back</span> 
            </button>
        </Link>
    </>)
}
