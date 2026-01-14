import React from 'react';
import { useTarot } from '../context/TarotContext';
import SakuraCard from '../components/molecules/SakuraCard.jsx'; 

export const GamePage = () => {
  // Extraemos todo lo que necesitamos del cerebro y/o Contexto
  const { 
    deck, 
    handleSelect, 
    selectedCards, 
    isRevealed, 
    getCardLabel, 
    revealReading 
  } = useTarot();

  return (
    <div className="flex flex-col items-center min-h-screen py-10 px-4">
      
      <header className="text-center mb-12">
        <h1 className="text-4xl font-serif text-[#D81B60] tracking-widest uppercase mb-2">
          El Amanecer Mágico
        </h1>
        <div className="h-0.5 w-40 bg-[#D81B60] mx-auto opacity-50 mb-2"></div>
        <p className="text-[#AD1457] italic">Selecciona 3 cartas para tu lectura</p>
      </header>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 mb-12">
        {deck.map((card) => {
          // Comprobamos si esta carta específica está seleccionada
          const isSelected = selectedCards.some((c) => c.id === card.id);
          
          return (
            <SakuraCard
              key={card.id}
              card={card}
              isSelected={isSelected}
              isRevealed={isRevealed}
              label={getCardLabel(card.id)}
              onClick={handleSelect}
              // Bloqueamos clics si ya hay 3 elegidas y esta no es una de ellas
              isDisabled={selectedCards.length === 3 && !isSelected}
            />
          );
        })}
      </div>

      <div className="h-20 flex items-center justify-center">
        {selectedCards.length === 3 && (
          <button
            onClick={revealReading}
            className={`
              px-12 py-4 rounded-full font-bold text-white shadow-xl transition-all duration-500
              ${isRevealed 
                ? 'bg-[#880E4F] scale-95 opacity-80 cursor-default' 
                : 'bg-linear-to-r from-[#F06292] to-[#D81B60] hover:scale-110 active:scale-95 animate-bounce-short'}
            `}
          >
            {isRevealed ? "TU DESTINO HA SIDO REVELADO" : "VER LECTURA"}
          </button>
        )}
      </div>

      {isRevealed && (
        <p className="mt-6 text-[#D81B60] font-medium animate-fade-in text-center max-w-md">
          Observa las cartas de tu Pasado, Presente y Futuro para guiar tu camino.
        </p>
      )}
    </div>
  );
};