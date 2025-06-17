import type { ButtonProps } from "../../types/types";

export const Button = ({
  children,
  icon,
  variant = "primary",
  loading = false,
  disabled = false,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) => {
  const isDisabled = disabled || loading;

  const baseStyles =
    "inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary/90 focus:ring-primary dark:bg-primary dark:hover:bg-primary/90",
    secondary:
      "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
  };

  return (
    <button
      type={type}
      disabled={isDisabled}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${
        isDisabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {loading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      ) : (
        icon
      )}
      {children}
    </button>
  );
};
