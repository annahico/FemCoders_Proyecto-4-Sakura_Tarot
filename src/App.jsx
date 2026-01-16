// src/App.jsx
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router"; // Ajusta la ruta a tu archivo de router

function App() {
  return <RouterProvider router={router} />;
}

export default App;