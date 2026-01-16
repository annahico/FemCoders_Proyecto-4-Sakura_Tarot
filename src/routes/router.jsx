import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/MainLayout";
import { HomePage } from "../pages/HomePage";
import { TarotPage } from "../pages/TarotPage";
import { FormPage } from "../pages/FormPage";

// src/routes/router.jsx
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout, // El componente que creamos arriba
    children: [
      { index: true, Component: HomePage },
      { path: "tarot", Component: TarotPage }, // Al ser hijo, entra dentro del Provider
      { path: "login", Component: FormPage }
    ],
  },
]);