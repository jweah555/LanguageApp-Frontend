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
import DeckSelection from "./pages/DeckSelection.jsx";
import Translate from "./pages/Translate.jsx";
import LoginSignUp from "./pages/LoginSignUp.jsx";
import CreateDeck from "./pages/CreateDeck.jsx";
import CreateCard from "./pages/CreateCard.jsx";
import UserDeck from "./pages/UserDeck.jsx";
import Profile from "./pages/Profile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "deckpage", element: <DeckPage /> },
      { path: "deckSelection", element: <DeckSelection /> },
      { path: "translate", element: <Translate /> },
      { path: "loginSignUp", element: <LoginSignUp /> },
      { path: "createDeck", element: <CreateDeck /> },
      { path: "createCard", element: <CreateCard /> },
      { path: "userDeck", element: <UserDeck /> },
      { path: "profile", element: <Profile /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
