import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./style/global.scss";

const router = createBrowserRouter([]);
const rootelem = document.getElementById("root");

createRoot(rootelem).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
