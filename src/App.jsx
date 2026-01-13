import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Background } from "./components/atoms/Background";
import { FormPage } from "./pages/FormPage.jsx"

const App = () => {
  return (
    <>
      <main>
        <Background/>
        <FormPage></FormPage>
      </main>
    </>
  )
}
export default App;
