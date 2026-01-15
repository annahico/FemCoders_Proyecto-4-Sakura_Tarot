import React from 'react'

export const ReadingIcon = ({onClick}) => {
  return (
    <div className='z-1 pr-20'>
        <button  className='flex flex-col items-center' onClick={onClick} >
            <img src="../src/assets/images/ReadingsIcon.svg"
                className='size-20'></img>
            <p className='font-[monserrat] text-[#6A4A4A] p-5'>Lectura de Tarot </p>
        </button>
    </div>
  )
}
