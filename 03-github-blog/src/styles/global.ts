import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :focus{
    outline: none;
  }
  
  body {
    background-color: ${props => props.theme["base-background"]};
  }
`