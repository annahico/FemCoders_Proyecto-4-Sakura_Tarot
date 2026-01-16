import React from 'react';
import { useNavigate } from 'react-router-dom';

export const HistoryPage = () => {
    const navigate = useNavigate();
    const savedReadings = []; 

    return (
        <div className="w-full min-h-screen flex flex-col items-center pt-8 pb-20 px-4">
            <header className="text-center mb-12">
                <h1 className="text-4xl font-serif text-[#880E4F] tracking-wide">
                    Historial de Lecturas
                </h1>
                <p className="text-[11px] text-[#880E4F]/70 uppercase tracking-[0.3em] mt-2">
                    Tus encuentros previos con el destino
                </p>
            </header>

            <div className="bg-white/10 backdrop-blur-md rounded-[40px] p-10 border border-white/20 shadow-2xl w-full max-w-4xl flex flex-col items-center">
                {savedReadings.length === 0 ? (
                    <div className="text-center">
                        <p className="text-[#880E4F] italic mb-6">Aún no has guardado ninguna lectura...</p>
                        <button 
                            onClick={() => navigate('/tarot')}
                            className="px-8 py-2 rounded-full uppercase text-[10px] tracking-[0.2em] bg-[#F48FB1]/40 border border-[#880E4F]/30 text-[#880E4F] hover:bg-[#F48FB1]/60 transition-all"
                        >
                            Ir a Consultar el Tarot
                        </button>
                    </div>
                ) : (
                    <p className="text-[#880E4F]">Aquí aparecerán tus cartas guardadas.</p>
                )}
            </div>

            <button 
                onClick={() => navigate('/')}
                className="mt-10 text-[#880E4F] text-[10px] uppercase tracking-widest hover:underline"
            >
                Volver al Inicio
            </button>
        </div>
    );
};