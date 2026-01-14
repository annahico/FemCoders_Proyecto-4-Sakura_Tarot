import { createContext, useContext } from 'react';

export const TarotContext = createContext();
export const useTarot = () => {
  const context = useContext(TarotContext);
  if (!context) {
    throw new Error('useTarot debe estar dentro de TarotProvider');
  }
  return context;
};