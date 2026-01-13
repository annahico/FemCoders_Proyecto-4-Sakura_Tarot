import { useState } from "react";
import "./App.css";
import { FormPage } from "./pages/FormPage.jsx";
import { TarotProvider } from "./context/TarotProvider.jsx";
import { useTarot } from "./context/TarotContext.jsx"; 
import { Background } from "./components/atoms/Background";

// Componente para ver que la lógica de las cartas funciona en consola
const DebugLogic = () => {
  const { deck, selectedCards } = useTarot();
  console.log("--- ESTADO DEL JUEGO (LOGS) ---");
  console.log("Cartas en el mazo (10):", deck);
  console.log("Cartas seleccionadas (3):", selectedCards);
  return null;
};

const App = () => {
  const [isLogged, setIsLogged] = useState(false); //tenemos qwue poner true para ver el mensaje de exito

  return (
    <TarotProvider>
      <DebugLogic /> 
      <main className="relative min-h-screen bg-[#FCE4EC]">
        {/* Tu fondo de nubes/estrellas */}
        <Background />

        <div className="relative z-10">
          {!isLogged ? (
            <FormPage onLogin={() => setIsLogged(true)} />
          ) : (
            /* Mientras no tengamos GamePage, muestra un mensaje de éxito */
            <div className="flex flex-col items-center justify-center h-screen">
              <h1 className="text-2xl font-bold text-pink-600">¡Login Correcto!</h1>
              <p className="text-pink-400">Pronto aquí verás las cartas de Sakura...</p>
            </div>
          )}
        </div>
      </main>
    </TarotProvider>
  );
}

export default App;