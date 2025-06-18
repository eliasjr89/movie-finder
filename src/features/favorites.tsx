import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MovieCard } from "../components/UI/MovieCard";
import { Loader } from "../components/UI/Loader";

const mockFavorites = [
  {
    id: 2,
    title: "Interstellar",
    release_date: "2014-11-07",
    poster_path:
      "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
];

export const Favorites = () => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<number[]>(
    mockFavorites.map((m) => m.id)
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  if (loading) return <Loader text="Loading favorites..." />;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {mockFavorites.map((movie) => (
        <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          year={movie.release_date.slice(0, 4)}
          posterUrl={movie.poster_path}
          isFavorite={favorites.includes(movie.id)}
          onToggleFavorite={() => toggleFavorite(movie.id)}
          onClick={() => navigate(`/movie/${movie.id}`)}
        />
      ))}
    </div>
  );
};
