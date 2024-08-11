
import css from './SearchForm.module.css';
import toast, {Toaster} from 'react-hot-toast';
export default function SearchForm({ onSubmit}) {

    const handleSubmit = (event) => {
        event.preventDefault();
        const query = event.target.query.value.trim();
        if (query.length === 0) {
            toast.success('Please type something in the searchfield', {
  style: {
    border: '1px solid #713200',
    padding: '16px',
    color: '#713200',
  },
  iconTheme: {
    primary: '#713200',
    secondary: '#FFFAEE',
  },
      });
      return
        }
       onSubmit(query);
       event.target.reset();
    }
    return (<>
        <Toaster position='top-center' />
        <div className={css.searchField} >
          <form className={css.form} onSubmit={handleSubmit}>
              <input className={css.input} type="text"  name="query"/>
          <button type="submit" className={css.searchBtn}>
            <span className={css.textBtn}>
              Search

            </span>
            
          </button>
          </form>
        </div>      
    </>)
}





  