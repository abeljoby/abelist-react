import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Games from "./pages/Games";
import Projects from "./pages/Projects";
import About from "./pages/About";
import ProjectPage from "./pages/ProjectPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "games",
    element: <Games />,
  },
  {
    path: "projects",
    element: <Projects />,
  },
  {
    path: "projects/:project",
    element: <ProjectPage />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

