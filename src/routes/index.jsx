import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Home from "../pages/Home";
import PokemonDetails from "../pages/PokemonDetails";
import NotFoundPage from "../pages/NotFoundPage";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "pokemon/:name",
        element: <PokemonDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
