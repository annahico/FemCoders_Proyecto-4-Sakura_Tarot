import { useTarot } from '../../context/TarotContext';

const CardBack = ({ card }) => {
    const { selectedCards, handleCardSelect, getCardLabel } = useTarot();

    // Verifica si la carta específica está seleccionada
    const isSelected = selectedCards.some((c) => c.id === card.id);
    // Deshabilita si ya hay 3 elegidas y la seleccionada no es una de ellas 
    const isDisabled = selectedCards.length >= 3 && !isSelected;
    const label = getCardLabel(card.id);

    return (
        <div
            onClick={() => !isDisabled && handleCardSelect(card)}
            className={`relative cursor-pointer transition-all duration-300 transform 
        ${isSelected ? 'ring-4 ring-pink-400 scale-105 shadow-lg' : 'hover:scale-102'} 
        ${isDisabled ? 'opacity-50 cursor-not-allowed grayscale' : ''}
      `}
        >
            {/* Imagen del dorso de la carta Sakura */}
            {/* <img src="#" alt="Sakura Card Back" className="rounded-lg" /> */}
            {/* Etiqueta visual Pasado/Presente/Futuro */}
            {isSelected && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs px-2 py-1 rounded-full shadow-md font-bold">
                    {label}
                </span>
            )}
        </div>
    );
};

export default CardBack;