import { Outlet } from "react-router-dom";
import { TarotProvider } from "../context/TarotProvider";
import { Background } from "../components/atoms/Background";
import "../App.css"; 

export const Layout = () => {
  return (
    <TarotProvider>
      <Background />
      {/* Aquí mantenemos tu contenedor original para no perder el diseño */}
      <main className="relative z-10 w-full min-h-screen">
        <Outlet /> {/* Aquí se renderizarán HomePage, TarotPage, etc. */}
      </main>
    </TarotProvider>
  );
};