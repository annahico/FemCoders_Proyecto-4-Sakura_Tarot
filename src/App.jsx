import { useState } from 'react';
import { TarotProvider } from "./context/TarotProvider";
import { Background } from "./components/atoms/Background";
import { HomePage } from "./pages/HomePage";
import { TarotPage } from "./pages/TarotPage";
import "./App.css";

function App() {
  const [inGame, setInGame] = useState(false);

  return (
    <TarotProvider>
      <Background />
      <main className="relative z-10 w-full min-h-screen">
        {!inGame ? (
          <HomePage onStart={() => setInGame(true)} />
        ) : (
          <TarotPage />
        )}
      </main>
    </TarotProvider>
  );
}

export default App; 