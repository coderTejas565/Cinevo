import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  // TMDB image URL
  const imageUrl = movie.poster_path 
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";  // Fallback

    const navigate = useNavigate();
  
  return (
    <div onClick={() => navigate(`/movie/${movie.id}`)} className="border-2 border-amber-700 w-64 h-96 m-3 rounded-lg overflow-hidden hover:scale-105 transition-transform">
      <img
        className="w-full h-80 object-cover"
        src={imageUrl}
        alt={movie.title}
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/500x750?text=No+Image";
        }}
      />
      <div className="p-2 bg-amber-600">
        <h1 className="text-black text-lg font-bold truncate">
          {movie.title}
        </h1>
        <p className="text-sm text-gray-800">
          {movie.release_date?.split('-')[0] || 'N/A'}
          {' • '}
          ⭐ {movie.vote_average?.toFixed(1) || 'N/A'}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;