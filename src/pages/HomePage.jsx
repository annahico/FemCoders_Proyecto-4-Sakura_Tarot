import React from 'react'
import { HomeIcons } from '../components/organisms/HomeIcons'
import {Background} from '../components/atoms/Background'

export const HomePage = () => {
  return (
    <>
      <Background></Background>
      <div className="flex justify-center items-center min-h-screen ">
          <HomeIcons/>
      </div>
    </>
  )
}
