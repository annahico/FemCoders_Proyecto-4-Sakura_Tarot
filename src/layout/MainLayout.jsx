// src/layout/MainLayout.jsx
import { Outlet } from "react-router-dom";
import { TarotProvider } from "../context/TarotProvider"; 
import { Background } from "../components/atoms/Background";
import "../App.css"; 

export const Layout = () => {
  return (
    <TarotProvider> 
      <Background />
      <main className="relative z-10 w-full min-h-screen">
        <Outlet /> 
      </main>
    </TarotProvider>
  );
};