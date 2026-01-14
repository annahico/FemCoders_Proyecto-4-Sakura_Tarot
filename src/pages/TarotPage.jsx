import React from 'react'
import { CardReading } from '../components/organisms/CardReading'
import { Logo } from '../components/atoms/Logo'

export const TarotPage = () => {
  return (
    <div className=''>
        <div>
            <Logo size={10}></Logo>
        </div>
        <CardReading></CardReading>
    </div>
  )
}
