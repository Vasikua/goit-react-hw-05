import css from './GoBackBtn.module.css';
import { Link } from 'react-router-dom';
import { GoArrowLeft } from "react-icons/go";
export default function GoBackBtn() {
    return (<>
        <Link to={'/movies'}>
            <button className={css.goBackBtn}>
                <GoArrowLeft className={css.svg} />
                Go back
            </button>
        </Link>
    </>)
}
