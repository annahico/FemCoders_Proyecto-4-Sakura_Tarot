import { useState } from "react";
import "./App.css";
import { TarotProvider } from "./context/TarotProvider.jsx";
import { Background } from "./components/atoms/Background";
import { FormPage } from "./pages/FormPage.jsx";
import { GamePage } from "./pages/GamePage.jsx";

export const App = () => {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <TarotProvider>
      <Background />
      <main className="relative z-10">
        {!isLogged ? (
          <FormPage onLogin={() => setIsLogged(true)} />
        ) : (
          <GamePage />
        )}
      </main>
    </TarotProvider>
  );
};