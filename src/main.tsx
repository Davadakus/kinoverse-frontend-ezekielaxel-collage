import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import TestPage from "./Pages/TestPage.tsx";
import MainScreen from "./Pages/MainScreen.tsx";
import MovieDisplay from "./Pages/MovieDisplay.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainScreen />,
    // errorElement: <Error />,
  },
  {
    path: "/movie/:id",
    element: <MovieDisplay />,
  },
  {
    path: "/Test",
    element: <TestPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
