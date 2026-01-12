import axios from 'axios';
import { useEffect, useRef, useState } from 'react';

const useFetch = (searchText, page) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const BASE_URL = "https://api.themoviedb.org/3";
  const cacheRef = useRef({});
  
  useEffect(() => {
    const endpoint = searchText 
      ? `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${searchText}&page=${page}`
      : `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;
    
    const cacheKey = `${searchText || 'popular'}-${page}`;
    
    // Clear movies on new search
    if (page === 1) {
      setMovies([]);
    }
    
    // Check cache
    if (cacheRef.current[cacheKey]) {
      setMovies(prev => [...prev, ...cacheRef.current[cacheKey]]);
      return;
    }
    
    setLoading(true);
    setError(null);
    
    axios
      .get(endpoint)
      .then((response) => {
        const newMovies = response.data.results || [];
        
        if (newMovies.length === 0) {
          setError("No movies found");
          return;
        }
        
        cacheRef.current[cacheKey] = newMovies;
        setMovies(prev => [...prev, ...newMovies]);
      })
      .catch((err) => {
        console.error(err);
        setError("Something went wrong. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [searchText, page]);
  
  return {movies, loading, error};
}

export default useFetch;