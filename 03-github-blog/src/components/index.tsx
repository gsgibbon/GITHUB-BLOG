import logo from "../assets/logo-blog.svg"
import effectRowsOne from "../assets/effectrows-header1.svg"
import effectRowsTwe from "../assets/effectrows-header2.svg"
import { HeaderContainer, RowsOne, RowsTwe } from "./styles"

export function Header () {
  return (
    <HeaderContainer>
      <RowsOne src={effectRowsOne} alt="" />
      <figure>
        <img src={logo} alt="" />
        <figcaption>GITHUB BLOG</figcaption>
      </figure>
      <RowsTwe src={effectRowsTwe} alt="" />
    </HeaderContainer>
  )
}