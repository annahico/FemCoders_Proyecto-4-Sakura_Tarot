import {createBrowserRouter, Navigate} from "react-router-dom";
// En src/routes/router.jsx

import { Layout } from "../layout/MainLayout";
import { HomePage } from "../pages/HomePage";
import { TarotPage } from "../pages/TarotPage";
// import { HistoryPage } from "../pages/HistoryPage";
// CAMBIA ESTO: de "./pages/FormPage" a "../pages/FormPage"
import { FormPage } from "../pages/FormPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout, 
        children: [
            {
                index: true, 
                Component: HomePage,
            },
            {
                path: "tarot",
                Component: TarotPage,
            },
        ]
    }
])