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

export type LoaderProps = {
  size?: number; // tamaño en px, por defecto 32
  colorClass?: string; // Tailwind class para color, por defecto border-primary
  text?: string; // texto debajo del loader opcional
};
