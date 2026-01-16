import React, { useState } from 'react';
import { HomeIcons } from '../components/organisms/HomeIcons';
import { FormRegister } from '../components/organisms/FormRegister';

export const HomePage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full relative">
      
      {/* Contenedor relativo para que el formulario flote justo aquí */}
      <div className="relative flex flex-col items-center">
        
        {/* Los iconos y el logo de fondo */}
        <HomeIcons onIconClick={() => setShowForm(true)} />

        {/* El formulario aparece ENCIMA del logo si showForm es true */}
        {showForm && (
          <div className="absolute inset-0 z-50 flex items-center justify-center">
            <FormRegister />
          </div>
        )}
        
      </div>
    </div>
  );
};