import { NavLink } from "react-router-dom";
import { ThemeToggle } from "../components/UI/ThemeToggle";
import { Heart, Search, Home } from "lucide-react";
import { Button } from "../components/UI/Button";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-xl font-bold text-primary">Movie Finder</h1>

      <div className="flex items-center gap-4">
        <NavLink to="/">
          <Button variant="secondary" icon={<Home className="w-4 h-4" />}>
            Home
          </Button>
        </NavLink>

        <NavLink to="/search">
          <Button variant="secondary" icon={<Search className="w-4 h-4" />}>
            Search
          </Button>
        </NavLink>

        <NavLink to="/favorites">
          <Button variant="secondary" icon={<Heart className="w-4 h-4" />}>
            Favorites
          </Button>
        </NavLink>

        <ThemeToggle />
      </div>
    </nav>
  );
};
