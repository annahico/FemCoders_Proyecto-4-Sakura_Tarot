import { useState } from "react";
import "./App.css";
import { TarotProvider } from "./context/TarotProvider.jsx";
import { useTarot } from "./context/TarotContext.jsx"; 
import { Background } from "./components/atoms/Background";
import { FormPage } from "./pages/FormPage.jsx";
import { GamePage } from "./pages/GamePage.jsx"; 

/**
 * Componente interno para monitorear el estado del juego en la consola.
 * Debe estar dentro de TarotProvider para poder usar useTarot().
 */
const DebugLogic = () => {
  const { deck, selectedCards } = useTarot();
  console.log("--- ESTADO DEL JUEGO (LOGS) ---");
  console.log("Cartas en el mazo (10):", deck);
  console.log("Cartas seleccionadas:", selectedCards);
  return null;
};

// Exportamos como App para que coincida con el main.jsx
export const App = () => {
  const [isLogged, setIsLogged] = useState(true);

  return (
    <TarotProvider>
      {/* El monitor de consola debe estar aquí dentro */}
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