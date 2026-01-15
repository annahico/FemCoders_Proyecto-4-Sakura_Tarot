import "./App.css";
import { TarotProvider } from "./context/TarotProvider.jsx";
import { Background } from "./components/atoms/Background";
import { FormPage } from "./pages/FormPage.jsx";
import { GamePage } from "./pages/GamePage.jsx";
import { FormLogin } from "./components/organisms/FormLogIn.jsx";
import { FormRegister } from "./components/organisms/FormRegister.jsx";

export const App = () => {
  return (
    <>
      <FormLogin></FormLogin>
      <FormRegister></FormRegister>
    </>
  );
};
