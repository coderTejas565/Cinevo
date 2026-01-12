import { useParams } from "react-router-dom";
import useMovieDetails from "../hooks/useMovieDetails";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";
import useMovieCast from "../hooks/useMovieCast";
const MovieDetail = () => {
  const { id } = useParams();

  const { movie, loading, error } = useMovieDetails(id);

  const { cast, loading: castLoading, error: castError } = useMovieCast(id);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;
  if (!movie) return null;

  return (
    <div className="p-6 text-white">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className="w-64 rounded-lg"
      />
      <h1 className="text-3xl font-bold mt-4">{movie.title}</h1>
      <p className="mt-2 text-gray-300">{movie.overview}</p>
      <p className="mt-2 text-yellow-400">⭐ {movie.vote_average.toFixed(1)}</p>

      <h2 className="text-2xl font-bold mt-6 text-black">Cast</h2>
      {castLoading && <p>Loading cast...</p>}
      {castError && <p>{castError}</p>}
      <ul className="list-disc list-inside  text-black">
        {cast.map((actor) => (
          <li key={actor.id}>
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetail;