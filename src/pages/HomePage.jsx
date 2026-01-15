import React from 'react';
import { HomeIcons } from '../components/organisms/HomeIcons';

export const HomePage = ({ onStart }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <HomeIcons onTarotClick={onStart} />
    </div>
  );
};