import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="flex flex-wrap gap-5">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
