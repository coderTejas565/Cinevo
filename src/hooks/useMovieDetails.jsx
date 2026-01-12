import { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const useMovieDetails = (id) => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);

    axios
      .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
      .then((res) => setMovie(res.data))
      .catch(() => setError("Failed to fetch movie details"))
      .finally(() => setLoading(false));
  }, [id]);

  return { movie, loading, error };
};

export default useMovieDetails;
