import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 18.5rem;
  min-width: 90rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background-color: ${props => props.theme["base-profile"]};
  opacity: 0.6;

  box-shadow: inset 0px -130px 160px 0px rgba(20, 88, 156, 0.4);

  figure {
    display: flex;
    gap: 1.25rem;
    flex-direction: column;
    align-items: center;
    
    img {
      width: 2.8125rem;
      height: 2.1875rem;
    }

    figcaption {
      font-family: "Coda", system-ui;
      font-size: 24px;
      text-shadow: 1px 1px 1px #000;
      color: ${props => props.theme.blue};
      line-height: 160%;
    }
  }
  
  
`

export const RowsOne = styled.img`
  width: 25.5625rem;
  height: 11.75rem;
`
export const RowsTwe = styled.img`
    width: 23.1875rem;
    height: 14.75rem;
`