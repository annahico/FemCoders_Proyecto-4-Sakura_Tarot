import { createContext, useState } from 'react';

const TarotContext = createContext();

export const TarotProvider = ({ children }) => {
    const [selectedCards, setSelectedCards] = useState([]); // Máximo 3 elementos 

    // Función principal de selección [cite: 35]
    const handleCardSelect = (card) => {
        // 1. Validar si la carta ya está seleccionada y evitar repetidas
        const isAlreadySelected = selectedCards.some((c) => c.id === card.id);

        // 2. Validar si ya se alcanzó el límite de 3 
        if (isAlreadySelected || selectedCards.length >= 3) return;

        // 3. Agregar a la selección
        setSelectedCards([...selectedCards, card]);
    };

    // Botón Limpiar selección
    const clearSelection = () => {
        setSelectedCards([]);
    };

    // Determinar la etiqueta según el orden de selección 
    const getCardLabel = (cardId) => {
        const index = selectedCards.findIndex((c) => c.id === cardId);
        if (index === 0) return "PASADO";
        if (index === 1) return "PRESENTE";
        if (index === 2) return "FUTURO";
        return null;
    };

    return (
        <TarotContext.Provider value={{
            selectedCards,
            handleCardSelect,
            clearSelection,
            getCardLabel
        }}>
            {children}
        </TarotContext.Provider>
    );
};

export { TarotContext };
