import { useState } from "react";
import { MovieCard } from "../components/UI/MovieCard";

const mockSearchResults = [
  {
    id: 3,
    title: "The Matrix",
    release_date: "1999-03-31",
    poster_path:
      "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    id: 4,
    title: "The Matrix Reloaded",
    release_date: "2003-05-15",
    poster_path:
      "https://image.tmdb.org/t/p/w500/9TGHDvWrqKBzwDxDodHYXEmOE6J.jpg",
  },
];

export const Search = () => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {mockSearchResults.map((movie) => (
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
