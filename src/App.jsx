import "./App.css";
import { FormPage } from "./pages/FormPage.jsx";
import { TarotProvider } from "./context/TarotProvider.jsx";

const App = () => {
  return (
    <TarotProvider>
      <main className="min-h-screen bg-[#FCE4EC]">
        {/* Por ahora mostramos el FormPage, luego pondremos la lógica para cambiar de pantalla */}
        <FormPage />
      </main>
    </TarotProvider>
  );
}

export default App;