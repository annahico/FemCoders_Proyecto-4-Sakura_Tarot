import { useState, useEffect } from 'react';
import { TarotContext } from './TarotContext'; 
import { sakuraApi } from '../services/sakuraApi';

const api = sakuraApi();

export const TarotProvider = ({ children }) => {
    const [deck, setDeck] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [isRevealed, setIsRevealed] = useState(false);

    useEffect(() => {
        const initGame = async () => {
            try {
                const cards = await api.getRandomCards(10);
                setDeck(cards);
            } catch (error) {
                console.error("Error cargando cartas:", error);
            }
        };
        initGame();
    }, []);

    const handleSelect = (card) => {
        if (selectedCards.length < 3 && !selectedCards.find(c => c.id === card.id)) {
            setSelectedCards([...selectedCards, card]);
        }
    };

    const revealReading = () => {
        if (selectedCards.length === 3) setIsRevealed(true);
    };

    const getCardLabel = (id) => {
        const index = selectedCards.findIndex(c => c.id === id);
        if (index === 0) return "Pasado";
        if (index === 1) return "Presente";
        if (index === 2) return "Futuro";
        return null;
    };

    return (
        <TarotContext.Provider value={{ deck, selectedCards, isRevealed, handleSelect, revealReading, getCardLabel }}>
            {children}
        </TarotContext.Provider>
    );
};