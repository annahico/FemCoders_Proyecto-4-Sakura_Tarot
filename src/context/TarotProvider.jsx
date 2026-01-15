import { useState, useEffect } from 'react';
import { TarotContext } from './TarotContext';
import { sakuraApi } from '../services/sakuraApi';

const api = sakuraApi();

export const TarotProvider = ({ children }) => {
    const [deck, setDeck] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [isRevealed, setIsRevealed] = useState(false);

    // Función para obtener cartas nuevas y barajar
    const initGame = async () => {
        try {
            const cards = await api.getRandomCards(10); 
            setDeck(cards);
        } catch (error) {
            console.error("Error cargando cartas:", error);
        }
    };

    useEffect(() => {
        const loadGame = async () => {
            await initGame();
        };
        loadGame();
    }, []);

    const handleSelect = (card) => {
        // Solo permite seleccionar si no se ha revelado la lectura
        if (!isRevealed && selectedCards.length < 3 && !selectedCards.find(c => c.id === card.id)) {
            setSelectedCards([...selectedCards, card]);
        }
    };

    const revealReading = () => {
        if (isRevealed) {
            // LÓGICA DE NUEVA LECTURA
            setSelectedCards([]); // Limpia las cartas seleccionadas
            setIsRevealed(false);  // Oculta la sección de resultados
            initGame();            // Opcional: Trae cartas nuevas para la siguiente ronda
        } else {
            // LÓGICA DE REVELAR DESTINO
            if (selectedCards.length === 3) {
                setIsRevealed(true);
            }
        }
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