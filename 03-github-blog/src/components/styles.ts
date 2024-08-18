import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 18.5rem;
  min-width: 90rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  background-color: ${props => props.theme["base-profile"]};
`

export const RowsOne = styled.img`
  width: 25.5625rem;
  height: 11.75rem;
`
export const RowsTwe = styled.img`
    width: 23.1875rem;
    height: 14.75rem;
`