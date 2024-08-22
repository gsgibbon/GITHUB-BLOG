import styled from "styled-components";

export const PostContainer = styled.div`
  width: 54rem;
  height: 13.25rem;
  border-radius: 10px;
  padding: 2rem;
  
  position: relative;
  z-index: 10;
  
  display: flex;
  gap: 2rem;
  background-color: ${props => props.theme["base-profile"]};
`