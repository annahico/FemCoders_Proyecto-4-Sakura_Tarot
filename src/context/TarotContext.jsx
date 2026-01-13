import { createContext, useContext } from 'react';

// Creamos el espacio de memoria
export const TarotContext = createContext();

// Creamos el "gancho" para que los componentes accedan a los datos
export const useTarot = () => {
  const context = useContext(TarotContext);
  if (!context) {
    throw new Error('useTarot debe estar dentro de TarotProvider');
  }
  return context;
};