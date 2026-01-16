import { Outlet } from "react-router";
import { Background } from "../components/atoms/Background";

export const Layout = () => {
  return(
    <>
      <Background/>
      <main><Outlet/></main>
    </>
  )
}