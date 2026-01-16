import { useState, useEffect, useCallback } from 'react';
import { TarotContext } from './TarotContext';
import { sakuraApi } from '../services/sakuraApi';
import axios from 'axios';

const api = sakuraApi();
const url = "http://localhost:3000/readings"; 

export const TarotProvider = ({ children }) => {
    const [deck, setDeck] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [isRevealed, setIsRevealed] = useState(false);
    const [history, setHistory] = useState([]);

    const initGame = useCallback(async () => {
        try {
            const cards = await api.getRandomCards(10); 
            setDeck(cards);
        } catch (error) {
            console.error("Error cargando cartas:", error);
        }
    }, []);

    const fetchHistory = useCallback(async () => {
        try {
            const response = await axios.get(url);
            if (response.data) {
                setHistory(response.data);
            }
        } catch (error) {
            console.error("Error cargando historial:", error);
        }
    }, []);

    useEffect(() => {
        let isMounted = true;
        const loadInitialData = async () => {
            try {
                await Promise.all([fetchHistory(), initGame()]);
            } catch (error) {
                if (isMounted) console.error("Error al cargar datos iniciales:", error);
            }
        };
        loadInitialData();
        return () => { isMounted = false; };
    }, [fetchHistory, initGame]);

    const saveReading = async (userId, username) => {
        try {
            const newReading = {
                userId,
                username,
                date: new Date().toLocaleString('es-ES', { 
                    day: 'numeric', month: 'long', year: 'numeric' 
                }),
                cards: {
                    past: selectedCards[0],
                    present: selectedCards[1],
                    future: selectedCards[2]
                }
            };
            const response = await axios.post(url, newReading);
            setHistory(prev => [...prev, response.data]);
            alert("✨ Lectura guardada en el historial mágico");
            return response.data;
        } catch (error) {
            console.error("Error en saveReading:", error.message);
            throw error;
        }
    };

    const handleSelect = (card) => {
        if (!isRevealed && selectedCards.length < 3 && !selectedCards.find(c => c.id === card.id)) {
            setSelectedCards([...selectedCards, card]);
        }
    };

    const revealReading = () => {
        if (isRevealed) {
            setSelectedCards([]); 
            setIsRevealed(false); 
            initGame();            
        } else {
            if (selectedCards.length === 3) setIsRevealed(true);
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
        <TarotContext.Provider value={{ 
            deck, selectedCards, isRevealed, history,
            setHistory, handleSelect, revealReading, getCardLabel, saveReading 
        }}>
            {children}
        </TarotContext.Provider>
    );
};