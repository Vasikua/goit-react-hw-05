import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../pages/HomePage/HomePage'
import Layout from './layout/Layout';
import MoviesPage from '../pages/MoviesPage/MoviesPage'
import MovieDetailsPage from './MovieDetailsPage/MovieDetailsPage'
import NotFoundPage from '../pages/NotFoundPage/NotFoundPage';
function App() {
  

  return (
    <Layout>
   
    <Routes>
      <Route path='/'element={<HomePage/>} />
        <Route path='/movies' element={<MoviesPage />} />
        <Route path='/movies/:movie' element={ <MovieDetailsPage/>} />
        <Route path='*' element={<NotFoundPage/> } />  
      </Routes>
      </Layout>
  )
}

export default App
