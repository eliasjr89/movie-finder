import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Loader } from "../components/UI/Loader";
import type { MovieDetailType } from "../types/types";

const mockMovieData: Record<string, MovieDetailType> = {
  "1": {
    id: 1,
    title: "Inception",
    release_date: "2010-07-16",
    poster_path:
      "https://image.tmdb.org/t/p/w500/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    overview:
      "A thief who steals corporate secrets through use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
    rating: 8.8,
  },
  "2": {
    id: 2,
    title: "Interstellar",
    release_date: "2014-11-07",
    poster_path:
      "https://image.tmdb.org/t/p/w500/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    overview:
      "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    director: "Christopher Nolan",
    cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    rating: 8.6,
  },
};

export const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<MovieDetailType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (id && mockMovieData[id]) {
        setMovie(mockMovieData[id]);
      }
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [id]);

  if (loading) return <Loader text="Loading movie details..." />;

  if (!movie)
    return (
      <div className="text-center p-6">
        <h2 className="text-2xl font-bold mb-4">Película no encontrada</h2>
        <p>Lo sentimos, no se encontró la película solicitada.</p>
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-6 flex flex-col md:flex-row gap-6 bg-gray-900 rounded-lg shadow-lg">
      <img
        src={movie.poster_path}
        alt={`Poster de ${movie.title}`}
        className="w-full md:w-1/3 rounded-lg object-cover"
      />
      <div className="flex flex-col text-white md:w-2/3">
        <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
        <p className="text-gray-400 mb-2">
          {new Date(movie.release_date).toLocaleDateString()}
        </p>
        <p className="mb-4">{movie.overview}</p>
        {movie.director && (
          <p className="mb-1">
            <strong>Director:</strong> {movie.director}
          </p>
        )}
        {movie.cast && (
          <p className="mb-1">
            <strong>Reparto:</strong> {movie.cast.join(", ")}
          </p>
        )}
        {movie.rating && (
          <p>
            <strong>Rating:</strong> {movie.rating} / 10
          </p>
        )}
      </div>
    </div>
  );
};
