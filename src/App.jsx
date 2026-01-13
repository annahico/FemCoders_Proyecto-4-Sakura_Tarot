import "./App.css";
import { FormPage } from "./pages/FormPage.jsx";
import { TarotProvider } from "./context/TarotProvider.jsx";
import { useTarot } from "./context/TarotContext.jsx"; 

// Creo un pequeño componente de prueba
const DebugLogic = () => {
  const { deck, selectedCards } = useTarot();

  console.log("--- ESTADO DEL JUEGO ---");
  console.log("Cartas en el mazo (10):", deck);
  console.log("Cartas seleccionadas (3):", selectedCards);

  return null; // No renderiza nada visualmente
};

const App = () => {
  return (
    <TarotProvider>
      <DebugLogic /> 
      <main className="min-h-screen bg-[#FCE4EC]">
        <FormPage />
      </main>
    </TarotProvider>
  );
}

export default App;