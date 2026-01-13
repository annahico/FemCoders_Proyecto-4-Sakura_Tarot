import { useState } from "react"; 
import "./App.css";
import { FormPage } from "./pages/FormPage.jsx";
import { TarotProvider } from "./context/TarotProvider.jsx";
import { useTarot } from "./context/TarotContext.jsx"; 
import { Background } from "./components/atoms/Background";

// Componente de prueba para consola
const DebugLogic = () => {
  const { deck, selectedCards } = useTarot();
  console.log("--- ESTADO DEL JUEGO ---");
  console.log("Cartas en el mazo (10):", deck);
  console.log("Cartas seleccionadas (3):", selectedCards);
  return null;
};

const App = () => {
  // Estado para saber si mostrar el Formulario (false) o el Juego (true)
  const [isLogged, setIsLogged] = useState(false);

  return (
    <TarotProvider>
      <DebugLogic /> 
      <main className="relative min-h-screen bg-[#FCE4EC]">
        <Background />

        <div className="relative z-10">
          {!isLogged ? (
            /* PASO 1: Formulario. Cuando termine, cambiará isLogged a true */
            <FormPage onLogin={() => setIsLogged(true)} />
          ) : (
            /* PASO 2: El Juego de cartas */
            <GamePage />
          )}
        </div>
      </main>
    </TarotProvider>
  );
}

export default App;