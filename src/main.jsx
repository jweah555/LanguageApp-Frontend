import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import "./styles/index.css";
// import App from "./App.jsx";
import Home from "./pages/Home.jsx";
import DeckPage from "./pages/Decks.jsx";
import ErrorPage from "./pages/Error.jsx";
import Layout from "./components/Layout/Layout.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "deckpage", element: <DeckPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
