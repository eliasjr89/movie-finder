import { useState } from "react";
import { MovieCard } from "../components/UI/MovieCard";

const mockMovies = [
  {
    id: 1,
    title: "Inception",
    release_date: "2010-07-16",
    poster_path:
      "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    release_date: "2014-11-07",
    poster_path:
      "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
];

export const Home = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {mockMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.release_date.slice(0, 4)}
          posterUrl={movie.poster_path}
          isFavorite={favorites.includes(movie.id)}
          onToggleFavorite={() => toggleFavorite(movie.id)}
        />
      ))}
    </div>
  );
};
