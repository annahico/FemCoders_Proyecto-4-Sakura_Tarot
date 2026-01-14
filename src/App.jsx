import { useState } from "react";
import "./App.css";
import { FormPage } from "./pages/FormPage.jsx";
import { GamePage } from "./pages/GamePage.jsx"; 
import { TarotProvider } from "./context/TarotProvider.jsx";
import { useTarot } from "./context/TarotContext.jsx"; 
import { Background } from "./components/atoms/Background";


const DebugLogic = () => {
  const { deck, selectedCards } = useTarot();
  console.log("--- ESTADO DEL JUEGO (LOGS) ---");
  console.log("Cartas en el mazo (10):", deck);
  console.log("Cartas seleccionadas:", selectedCards);
  return null;
};

const App = () => {
  // Cambiar a false si queremosa probar el formulario de login
  const [isLogged, setIsLogged] = useState(true);

  return (
    <TarotProvider>
      <DebugLogic /> 
      
      <main className="relative min-h-screen bg-[#FCE4EC] overflow-x-hidden">
        <Background />

        <div className="relative z-10 w-full">
          {!isLogged ? (
            <FormPage onLogin={() => setIsLogged(true)} />
          ) : (
            <GamePage />
          )}
        </div>
      </main>
    </TarotProvider>
  );
};

export { App };