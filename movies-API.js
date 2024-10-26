import axios from 'axios';
const API_KEY = 'dbeebb2b43b4d9df939a97effabed1e2';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYmVlYmIyYjQzYjRkOWRmOTM5YTk3ZWZmYWJlZDFlMiIsInN1YiI6IjY2MjcwYmVmZTU0ZDVkMDE2NWVlNDdiMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xDBxFebCkJOpyqNA4AEtvGhgtSBbWcaK_ZRveyYTrKM';
 
axios.defaults.baseURL = "https://api.themoviedb.org/3";

export const getTopMovies = async () => {
    const response = await axios.get("/trending/movie/day", {
        params: {
            api_key: API_KEY,
            language: 'en-US',
           
        },
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    });
   
    return {
        result: response.data

    }
}

export const getSearchMovies = async (query) => {
    const response = await axios.get(`/search/movie?query=${query}&include_adult=false&language=en-US&page=1`, {
         params: {
            api_key: API_KEY
            },
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    })
    return {
        result: response.data
        
    }
}

export const getMoviesDetalies = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}?language=en-US`, {
         params: {
            api_key: API_KEY
            },
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    })
    return {
        result: response.data
    }
}
export const getCast = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits?language=en-US`, {
         params: {
            api_key: API_KEY
            },
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    })
    return {
        result: response.data
    }
}


export const getReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews?language=en-US&page=1`, {
         params: {
            api_key: API_KEY
            },
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    })
    return {
        result: response.data
    }
}