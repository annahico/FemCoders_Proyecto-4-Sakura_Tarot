import { useState } from "react";
import "./App.css";

import React from 'react'
import { HomePage } from "./pages/HomePage";
import { FormPage } from "./pages/FormPage";
import { Background } from "./components/atoms/Background";
import { TarotPage } from "./pages/TarotPage";

export const App = () => {
  return (
    <>
      <Background></Background>
      <div>
        <TarotPage></TarotPage>
      </div>
    </>
  )
}
