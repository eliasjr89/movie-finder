import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Home } from "../features/home";
import { Search } from "../features/search";
import { Favorites } from "../features/favorites";
import { MovieDetail } from "../features/movie.tsx";
import { NotFound } from "../features/notFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "search", element: <Search /> },
      { path: "favorites", element: <Favorites /> },
      { path: "movie/:id", element: <MovieDetail /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
