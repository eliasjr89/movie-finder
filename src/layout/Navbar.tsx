import { NavLink } from "react-router-dom";
import { ThemeToggle } from "../components/UI/ThemeToggle";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-xl font-bold text-primary">Movie Finder</h1>

      <div className="flex items-center gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold underline"
              : "text-gray-600 dark:text-gray-300 hover:text-primary"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/search"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold underline"
              : "text-gray-600 dark:text-gray-300 hover:text-primary"
          }
        >
          Search
        </NavLink>

        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            isActive
              ? "text-primary font-semibold underline"
              : "text-gray-600 dark:text-gray-300 hover:text-primary"
          }
        >
          Favorites
        </NavLink>

        <ThemeToggle />
      </div>
    </nav>
  );
};
