import React from "react";
import type { LoaderProps } from "../../types/types";

export const Loader: React.FC<LoaderProps> = ({
  size = 32,
  colorClass = "border-primary",
  text,
}) => {
  const style = {
    width: size,
    height: size,
  };

  return (
    <div
      className="flex flex-col items-center p-4"
      role="status"
      aria-live="polite"
    >
      <div
        style={style}
        className={`border-4 border-t-transparent rounded-full animate-spin ${colorClass}`}
      />
      {text && <span className="mt-2 text-primary text-sm">{text}</span>}
    </div>
  );
};
