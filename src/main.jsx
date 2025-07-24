import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routers";
import "./style/global.scss";

const rootElemenets = document.getElementById("root");

createRoot(rootElemenets).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
