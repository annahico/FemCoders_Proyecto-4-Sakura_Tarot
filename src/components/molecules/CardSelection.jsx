import React from 'react'
import CardBack from '../atoms/CardBack'
import { Cards } from '../atoms/Cards'

export const CardSelection = () => {
  return (
    <div>
        {/* <CardBack></CardBack> */}
        <div className='z-2 bg-amber-600 bg-opacity-100 flex'>
            <div className='z-3 grid grid-cols-5 grid-row-2 gap-y-10 col-g w-4xl items-center'>
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
    </div>
  )
}
