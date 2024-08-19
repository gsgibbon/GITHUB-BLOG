import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`

export const ProfileContainer = styled.div`
  min-width: 54rem;
  min-height: 13.25rem;
  
  display: flex;
  background-color: ${props => props.theme["base-profile"]};

  img {
    max-width: 9.25rem;
    max-height: 9.25rem;
    border-radius: 8px;
  }
`