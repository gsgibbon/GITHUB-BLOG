import logo from "../assets/Logologo-githubBlog.svg"
import effectRowsOne from "../assets/effectrows-header1.svg"
import effectRowsTwe from "../assets/effectrows-header2.svg"
import { HeaderContainer, RowsOne, RowsTwe } from "./styles"

export function Header () {
  return (
    <HeaderContainer>
      <RowsOne src={effectRowsOne} alt="" />
      <img src={logo} alt="" />
      <RowsTwe src={effectRowsTwe} alt="" />
    </HeaderContainer>
  )
}