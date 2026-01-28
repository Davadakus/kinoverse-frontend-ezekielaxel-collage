import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./style/index.css";
import TestPage from "./Pages/TestPage.tsx";
import MainScreen from "./Pages/MainScreen.tsx";
import MovieDisplay from "./Pages/MovieDisplay.tsx";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./style/theme.ts";

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
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
);
