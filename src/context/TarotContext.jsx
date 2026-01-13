import { createContext, useState } from 'react';

const TarotContext = createContext();

export const TarotProvider = ({ children }) => {
    const [selectedCards, setSelectedCards] = useState([]);
    const handleCardSelect = (card) => {
        const isAlreadySelected = selectedCards.some((c) => c.id === card.id);
        if (isAlreadySelected || selectedCards.length >= 3) return;
        setSelectedCards([...selectedCards, card]);
    };

    const clearSelection = () => {
        setSelectedCards([]);
    };

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
