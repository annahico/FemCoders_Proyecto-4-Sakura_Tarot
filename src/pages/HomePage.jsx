import React from 'react';
import { useNavigate } from 'react-router-dom'; //
import { HomeIcons } from '../components/organisms/HomeIcons';

export const HomePage = () => {
  const navigate = useNavigate(); //

  return (
    <div className="flex items-center justify-center min-h-screen">
      <HomeIcons onTarotClick={() => navigate('/tarot')} /> 
    </div>
  );
};