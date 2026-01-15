import React, { useState } from 'react'
import { Logo } from '../atoms/Logo'
import { ReadingIcon } from '../atoms/ReadingIcon'
import { HistoryIcon } from '../atoms/HistoryIcon'
import { FormLogin } from "./FormLogIn";
import { FormRegister } from "./FormRegister";

import { HomeTitle } from '../atoms/HomeTitle'

export const HomeIcons = () => {

const [showRegister, setShowRegister] = useState(false)
  
  const handleClick = () => {
    setShowRegister(true)
}

  return (
    <>
      {showRegister && <FormRegister/>}

      <div className='z-1 grid grid-cols-3 grid-row-2 justify-items-center items-center'>
          <div className='z-1 col-start-2 col-span-1 row-span-1 row-start-1'><HomeTitle></HomeTitle></div>
          <div className="z-1 col-start-2 col-span-1 row-span-1 row-start-2"><Logo></Logo></div>
          <div className="cursor-pointer transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] z-1 col-start-1 col-span-1 row-span-1 row-start-2" onClick={handleClick}><ReadingIcon ></ReadingIcon></div>
          <div className="z-1 col-start-3 col-span-1 row-span-1 row-start-2 " onClick={handleClick}><HistoryIcon ></HistoryIcon></div>
      </div>
    </>
  )
}



