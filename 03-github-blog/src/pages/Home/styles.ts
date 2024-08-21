import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin-top: -80px;
`

export const ProfileContainer = styled.div`
  width: 54rem;
  height: 13.25rem;
  border-radius: 10px;
  padding: 2rem;
  
  position: relative;
  z-index: 10;
  
  display: flex;
  gap: 2rem;
  background-color: ${props => props.theme["base-profile"]};

  img {
    max-width: 9.25rem;
    max-height: 9.25rem;
    border-radius: 8px;

  }

  h2 {
    font-size: 1.5rem;
    line-height: 130%;
  }

  p {
    font-size: 1rem;
    line-height: 160%;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    nav {
      display: flex;
      gap: 1.25rem;

      a {
        line-height: 160%;
        text-decoration: none;
        color: ${props => props.theme["base-subtitle"]};
      }
    }
  }
`

export const SearchContainer = styled.form`
  width: 54rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin: 4rem 0 2rem 0;

  div {
    display: flex;
    justify-content: space-between;
   }

  h4 {
    font-size: 1.125rem;
  }

  span {
    font-size: 0.875rem;
    line-height: 160%;
    text-align: right;
    color: ${props => props.theme["base-span"]}
  }

  input {
    width: 100%;
    border-radius: 6px;
    padding: 0.75rem 1rem;

    color: ${props => props.theme["base-text"]};
    background-color: ${props => props.theme["base-input"]};
    border:1px solid ${props => props.theme["base-border"]};

    &::placeholder {
      color: ${props => props.theme["base-label"]};
    }
  }
`

export const LinkGithub = styled.a`
  position: absolute;
  top: 2rem;
  right: 2rem;

  font-size: 0.75rem;
  color: ${props => props.theme.blue};
  text-decoration: none;
  line-height: 160%;
`

export const PostsContainer = styled.div`
  width: 54rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: space-between;
  gap: 2rem;
`;

export const Post = styled.div`
  height: 16.25rem;
  border-radius: 10px;
  padding: 1rem 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  background-color: ${props => props.theme["base-post"]};

  div {
    display: flex;
    justify-content: space-between;
    color: ${props => props.theme["base-span"]};
  }
`;