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
    font-family: "Nunito Sans", sans-serif;
    background-color: ${props => props.theme["base-background"]};
  }

  h1,h2,h3 {
    color: ${props => props.theme["base-title"]}
  }

  h4 {
    
    color: ${props => props.theme["base-subtitle"]}
  }

  p {
    color: ${props => props.theme["base-text"]}
  }

  span {
    color: ${props => props.theme["base-span"]};
  }
`