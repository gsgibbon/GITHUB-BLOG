import styled from "styled-components";

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: -80px;
`
export const HeaderPost = styled.div`
  width: 54rem;
  height: 13.25rem;
  border-radius: 10px;
  padding: 2rem;
  
  z-index: 10;
  
  display: flex;
  flex-direction: column;
  gap: 2rem;

  background-color: ${props => props.theme["base-profile"]};

  nav {
    display: flex;
    justify-content: space-between;

    a {
      text-decoration: none;
      color: ${props => props.theme.blue};
    }
  }

  ul {
    display: flex;
    gap: 2rem;

    li {
      list-style: none;
      color: ${props => props.theme["base-span"]}
    }
  }
`