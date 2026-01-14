import React from 'react'
import CardBack from '../atoms/CardBack'
import { Cards } from '../atoms/Cards'

export const CardSelection = () => {
  return (
        <div className='bg-[#fde8ee]/50 absolute z-10 p-15 rounded-2xl border-2 border-[#d4Af37]'>
            <div className="z-20 grid grid-cols-5 grid-row-2 gap-y-10 col-g items-center">
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
                <Cards></Cards>
            </div>
        </div>
  )
}
