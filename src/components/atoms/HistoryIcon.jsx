import React from 'react'

export const HistoryIcon = ({onClick}) => {
  return (
    <div className='z-1 pl-20'>
        <button className='flex flex-col items-center' onClick={onClick}>
            <img src="../src/assets/images/HistoryIcon.svg" alt="Book Icon" 
                className='size-20'></img>
            <p className='font-[monserrat] text-[#6A4A4A] p-5'>Historial de Lecturas</p>
        </button>
    </div>
  )
}
