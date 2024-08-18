import { Outlet } from "react-router-dom";
import { Header } from "../../components";

import { LayoutContainer } from "./styles";

export function defaultLayout () {
  return(
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  )
}