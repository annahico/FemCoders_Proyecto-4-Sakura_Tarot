import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/MainLayout";
import { HomePage } from "../pages/HomePage";
import { TarotPage } from "../pages/TarotPage";
import { FormPage } from "../pages/FormPage";

const getSessionKey = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.id : "guest";
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout key={getSessionKey()} />, 
    children: [
      { 
        index: true, 
        element: <HomePage /> 
      },
      { 
        path: "tarot", 
        element: <TarotPage /> 
      },
      { 
        path: "login", 
        element: <FormPage /> 
      },
    ],
  },
]);