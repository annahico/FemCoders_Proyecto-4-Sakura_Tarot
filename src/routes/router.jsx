import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import { HomePage } from "../pages/HomePage";
import { TarotPage } from "../pages/TarotPage";
import { HistoryPage } from "../pages/HistoryPage";
import FormPage from "../pages/FormPage";



export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: "/tarot",
                Component: TarotPage,
            },
            {
                path: "/history",
                Component: HistoryPage,
            }
        ]
    }
])