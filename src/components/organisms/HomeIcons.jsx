import React from 'react';
import { Logo } from '../atoms/Logo';
import { ReadingIcon } from '../atoms/ReadingIcon';
import { HistoryIcon } from '../atoms/HistoryIcon';
import { HomeTitle } from '../atoms/HomeTitle';

export const HomeIcons = ({ onTarotClick }) => {
  return (
    <div className='z-1 grid grid-cols-3 grid-rows-2 justify-items-center items-center'>
        <div className='z-1 col-start-2 row-start-1'>
          <HomeTitle />
        </div>

        {/* Al hacer clic aquí, App.jsx cambia inGame a true */}
        <div 
          className="z-1 col-start-1 row-start-2 cursor-pointer"
          onClick={onTarotClick}
        >
          <ReadingIcon />
        </div>

        <div className="z-1 col-start-2 row-start-2">
          <Logo />
        </div>

        <div className="z-1 col-start-3 row-start-2">
          <HistoryIcon />
        </div>
    </div>
  );
};