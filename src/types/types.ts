import type { ReactNode } from "react";

export type ButtonProps = {
  children?: ReactNode;
  icon?: ReactNode;
  variant?: "primary" | "secondary";
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
};

export type MovieCardProps = {
  id: number;
  title: string;
  year: string;
  posterUrl: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

export type LoaderProps = {
  size?: number;
  colorClass?: string;
  text?: string;
};

export type MovieDetailType = {
  id: number;
  title: string;
  release_date: string;
  poster_path: string;
  overview: string;
  director?: string;
  cast?: string[];
  rating?: number;
};

