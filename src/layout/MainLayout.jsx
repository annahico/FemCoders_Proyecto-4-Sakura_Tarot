// src/layout/MainLayout.jsx
import { Outlet } from "react-router-dom";
import { TarotProvider } from "../context/TarotProvider"; // Importa tu Provider
import { Background } from "../components/atoms/Background";

export const Layout = () => {
  return (
    <TarotProvider> {/* <-- Aquí es donde ocurre la magia */}
      <Background />
      <main className="relative z-10 w-full min-h-screen">
        <Outlet /> {/* Aquí se renderizarán TarotPage, FormPage, etc. */}
      </main>
    </TarotProvider>
  );
};