// src/components/organisms/HomeIcons.jsx
import React from 'react';
import { Logo } from '../atoms/Logo';
import { ReadingIcon } from '../atoms/ReadingIcon';
import { HistoryIcon } from '../atoms/HistoryIcon';
import { HomeTitle } from '../atoms/HomeTitle';

export const HomeIcons = ({ onIconClick }) => {
  return (
    <div className='grid grid-cols-3 grid-rows-[auto_auto] justify-items-center items-center'>
        {/* Título arriba del logo */}
        <div className='col-start-2 row-start-1 mb-2'>
          <HomeTitle />
        </div>
        
        {/* Logo central circular */}
        <div className="col-start-2 row-start-2 scale-110">
          <Logo />
        </div>
        
        {/* Iconos laterales: Ejecutan onIconClick al pulsar */}
        <div 
          className="col-start-1 row-start-2 cursor-pointer transition-transform hover:scale-110" 
          onClick={onIconClick}
        >
          <ReadingIcon />
        </div>
        <div 
          className="col-start-3 row-start-2 cursor-pointer transition-transform hover:scale-110" 
          onClick={onIconClick}
        >
          <HistoryIcon />
        </div>
    </div>
  );
};