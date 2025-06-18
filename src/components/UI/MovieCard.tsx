import React from "react";
import { motion } from "framer-motion";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

import type { MovieCardProps } from "../../types/types";
import { Button } from "./Button";

type Props = MovieCardProps & {
  onClick?: () => void;
};

export const MovieCard: React.FC<Props> = ({
  title,
  year,
  posterUrl,
  isFavorite,
  onToggleFavorite,
  onClick,
}) => {
  const handleFavoriteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // evita que se dispare onClick de la card
    onToggleFavorite();
  };

  return (
    <motion.div
      onClick={onClick}
      className="relative bg-gray-900 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 max-w-xs mx-auto"
      whileHover={{ scale: 1.03 }}
      layout
      role="article"
      aria-label={`Movie card for ${title}`}
    >
      <img
        src={posterUrl}
        alt={`Poster of ${title}`}
        className="w-full h-64 object-cover"
        loading="lazy"
      />
      <div className="p-4 flex justify-between items-center">
        <div className="overflow-hidden">
          <h3
            className="text-white text-lg font-semibold truncate"
            title={title}
          >
            {title}
          </h3>
          <p className="text-gray-400 text-sm">{year}</p>
        </div>
        <Button
          onClick={handleFavoriteClick}
          variant="secondary"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          className="text-red-500 p-1 rounded-full w-10 h-10 flex items-center justify-center"
        >
          {isFavorite ? (
            <HeartIconSolid className="h-6 w-6 text-red-500" />
          ) : (
            <HeartIcon className="h-6 w-6 text-red-500" />
          )}
        </Button>
      </div>
    </motion.div>
  );
};
