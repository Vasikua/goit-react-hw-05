import { ProgressBar } from 'react-loader-spinner';
import css from './Loader.module.css'
export default function Loader() {
    
return (
    <>
    <div className={css.loader}>
        <ProgressBar
            visible={true}
            height="80"
            width="1110"
            color="red"
            ariaLabel="progress-bar-loading"
            wrapperStyle={{}}
            wrapperClass=""
            />
    </div>
    </>
  );
}
