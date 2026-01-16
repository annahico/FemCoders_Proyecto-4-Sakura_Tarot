import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HomeIcons } from '../components/organisms/HomeIcons';
import { FormRegister } from '../components/organisms/FormRegister';

export const HomePage = () => {
  const [showForm, setShowForm] = useState(false);
  const navigate = useNavigate();

  const handleIconClick = (type) => {
  if (type === 'history') {
    navigate('/history');
  } else {
    setShowForm(true);
  }
};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full relative">
      <div className="relative flex flex-col items-center">
        <HomeIcons onIconClick={handleIconClick} />   
        {showForm && (
          <div className="absolute inset-0 z-50 flex items-center justify-center">
            <div className="fixed inset-0 bg-black/20" onClick={() => setShowForm(false)}></div>
            <div className="relative z-10">
              <FormRegister />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};