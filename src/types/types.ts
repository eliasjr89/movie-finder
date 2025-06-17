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
  title: string;
  year: string;
  posterUrl: string;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};
