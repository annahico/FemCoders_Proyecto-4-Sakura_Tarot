import React from 'react';
import { HomeIcons } from '../components/organisms/HomeIcons';
import { FormRegister } from '../components/organisms/FormRegister';

export const HomePage = ({ onStart }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <HomeIcons onTarotClick={onStart} />
      {/* Pasamos onStart al formulario para que al dar positivo active el Tarot */}
      <FormRegister onSuccess={onStart} />
    </div>
  );
};