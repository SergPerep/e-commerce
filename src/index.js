import React from "react";
import ReactDOM from "react-dom/client";
import "./reset.css";
import "./style.css";
import HomePage from "./pages/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import FavoritesPage from "./pages/FavoritesPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product/:id",
    element: <ProductPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="page-container">
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </div>
  </React.StrictMode>
);
