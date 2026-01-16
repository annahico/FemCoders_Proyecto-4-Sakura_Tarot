import React from 'react';

export const Cards = ({ card, isRevealed = false }) => {
  if (!card) return null;

  // Intentamos obtener la imagen de la raíz o de un posible sub-objeto 'cards'
  const frontImage = card.sakuraCard || (card.cards && card.cards.sakuraCard);
  const backImage = card.sakuraReverse || (card.cards && card.cards.sakuraReverse);

  // Si isRevealed es false, usamos el dorso. 
  // Si backImage sigue siendo undefined, usamos el link directo como última opción.
  const imageSource = isRevealed 
    ? frontImage 
    : (backImage || "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg");

  return (
    <div className="w-24 h-40 flex items-center justify-center">
      <img 
        src={imageSource} 
        alt={card.spanishName || "Carta Sakura"}
        className="w-full h-full object-contain rounded-lg shadow-md"
        onError={(e) => {
          // Si el link de la API falla (error 404), cargamos el reverso seguro
          e.target.onerror = null; 
          e.target.src = "https://i.ibb.co/XxrvMJ2/Reverso-Sakura.jpg";
        }}
      />
    </div>
  );
};