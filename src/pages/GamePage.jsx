import React from 'react';
import { useTarot } from '../context/TarotContext';
import SakuraCard from '../components/molecules/SakuraCard';
import { HomeIcons } from '../components/organisms/HomeIcons'; 

export const GamePage = () => {
  const { deck, handleSelect, selectedCards, isRevealed, getCardLabel, revealReading } = useTarot();

  return (
    <div className="flex flex-col items-center w-full py-4 animate-fade-in">
    
      <div className="mb-6 w-full flex justify-center scale-90 md:scale-100">
        <HomeIcons />
      </div>

      {/* CABECERA DINÁMICA */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-4xl font-serif text-[#D81B60] tracking-[0.2em] uppercase mb-2 drop-shadow-sm">
          El Amanecer Mágico
        </h1>
        <p className="text-[#AD1457] font-medium italic text-lg">
          {selectedCards.length < 3 
            ? `Selecciona ${3 - selectedCards.length} cartas para tu tirada` 
            : isRevealed ? "Tu destino ha sido escrito" : "¡Tirada completa! Revela tu lectura"}
        </p>
      </div>

      {/* EL TABLERO (Grid de 10 cartas) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-10 mb-12 max-w-6xl px-4 items-center justify-center">
        {deck.map((card) => {
          const isSelected = selectedCards.some((c) => c.id === card.id);
          return (
            <SakuraCard
              key={card.id}
              card={card}
              isSelected={isSelected}
              isRevealed={isRevealed}
              label={getCardLabel(card.id)}
              onClick={handleSelect}
              isDisabled={selectedCards.length === 3 && !isSelected}
            />
          );
        })}
      </div>

      <div className="h-24 flex items-center">
        {selectedCards.length === 3 && (
          <button
            onClick={revealReading}
            className={`
              px-12 py-4 rounded-full font-bold text-white shadow-2xl transition-all duration-500 transform
              ${isRevealed 
                ? 'bg-[#880E4F] scale-95 opacity-80 cursor-default' 
                : 'bg-linear-to-r from-[#F06292] to-[#D81B60] hover:scale-110 active:scale-95 animate-pulse cursor-pointer'}
            `}
          >
            {isRevealed ? "LECTURA COMPLETADA" : "VER MI DESTINO"}
          </button>
        )}
      </div>
    </div>
  );
};