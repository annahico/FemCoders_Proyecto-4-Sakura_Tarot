import React from 'react'
import { CardSelection } from '../molecules/CardSelection'
import { Button } from '../atoms/Button'

export const CardReading = () => {
  return (
    <div className="flex flex-col-reverse items-center top-1/4">
        <CardSelection></CardSelection>
        <Button buttonname="Barajar" className=""></Button>
    </div>
  )
}
