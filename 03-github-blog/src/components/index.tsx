import logo from "../assets/Logologo-githubBlog.svg"
import { HeaderContainer } from "./styles"

export function Header () {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
    </HeaderContainer>
  )
}