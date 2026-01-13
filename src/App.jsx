import "./App.css";
import { Background } from "./components/atoms/background";
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
