import React from 'react';
import { CardReading } from '../components/organisms/CardReading';

export const TarotPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-8 pb-20 px-4">

      <header className="text-center mb-12">
        <h1 className="text-4xl font-serif text-[#880E4F] tracking-wide">
          El Amanecer Mágico
        </h1>
        <p className="text-[11px] text-[#880E4F]/70 uppercase tracking-[0.3em] mt-2">
          Tarot del pasado, presente y futuro
        </p>
      </header>

      <CardReading />
    </div>
  );
};