import React from 'react';

const SakuraCard = ({ card, isSelected, isRevealed, label, onClick, isDisabled }) => {
  return (
    <div
      onClick={() => !isDisabled && onClick(card)}
      className={`relative w-24 h-40 perspective-[1000px] transition-all duration-300 
        ${isDisabled ? 'cursor-not-allowed opacity-80' : 'cursor-pointer hover:scale-105'}
      `}
    >
      <div
        className={`relative w-full h-full duration-700 transform-3d transition-transform 
          ${isRevealed && isSelected ? 'transform-[rotateY(180deg)]' : ''}
          ${isSelected && !isRevealed ? 'ring-4 ring-pink-400 rounded-lg shadow-lg -translate-y-2' : ''}
        `}
      >

        <div className="absolute inset-0 w-full h-full backface-hidden bg-[#F8BBD0] rounded-lg border-2 border-pink-300 shadow-md overflow-hidden">
          <img
            src="/assets/card-back.png"
            alt="Dorso Sakura"
            className="w-full h-full object-cover"
          />

          {isSelected && (
            <div className="absolute inset-0 bg-pink-500/30 flex items-center justify-center">
              <span className="bg-[#D81B60] text-white text-[9px] px-2 py-0.5 rounded-full font-bold shadow-sm uppercase tracking-tighter">
                {label}
              </span>
            </div>
          )}
        </div>

        <div className="absolute inset-0 w-full h-full backface-hidden transform-[rotateY(180deg)] bg-white rounded-lg border-2 border-[#FDD835] overflow-hidden shadow-2xl flex flex-col">
          <img
            src={card?.sakuraCard}
            alt={card?.englishName}
            className="w-full h-3/4 object-cover"
          />
          <div className="flex-1 bg-linear-to-b from-white to-[#FFF9C4] flex items-center justify-center p-1">
            <p className="text-[8px] font-bold text-[#827717] text-center uppercase leading-none">
              {card?.spanishName}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SakuraCard;