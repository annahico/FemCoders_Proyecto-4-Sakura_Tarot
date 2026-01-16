import React from 'react';
import { useNavigate } from 'react-router-dom'; //
import { HomeIcons } from '../components/organisms/HomeIcons';

export const HomePage = () => {
  // Inicializamos el hook de navegación
  const navigate = useNavigate(); //

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Sustituimos onStart por una función que navega 
          físicamente a la ruta del tarot 
      */}
      <HomeIcons onTarotClick={() => navigate('/tarot')} /> 
    </div>
  );
};