import { useEffect, useState } from 'react';
import axios from 'axios'; 

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const useMovieCast = (movieId) => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;

    setLoading(true);
    setError(null);

    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`
      )
      .then((response) => {
        const topCast = response.data.cast.slice(0, 5);
        setCast(topCast);
      })
      .catch(() => {
        setError("Failed to load cast");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [movieId]);

  return { cast, loading, error };
};

export default useMovieCast;
