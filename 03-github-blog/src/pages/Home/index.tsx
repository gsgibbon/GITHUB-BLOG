import axios from "axios";
import { HomeContainer, LinkGithub, PostsContainer, ProfileContainer, SearchContainer } from "./styles";
import { useState, useEffect } from "react";

interface TypesProfile {
  name: string
  login: string
  avatar: string
  followers: string
}
export function Home() {
  const [profile, setProfile] = useState<TypesProfile>()

  async function getProfile () {
    const response = await axios.get("https://api.github.com/users/gsgibbon")

    const data = response.data;

    setProfile({
      name: data.name,
      login: data.login,
      avatar: data.avatar_url,
      followers: data.followers
    })
  }

  useEffect(() => {
    getProfile()
  }, [])

  return(
    <HomeContainer>
      {profile && 
        <ProfileContainer>
          <img src={profile.avatar} alt="" />
          <div>
            <h2>{profile.name}</h2>
            
            <LinkGithub href="#">GITHUB</LinkGithub>
            
            <p>
              Tristique volutpat pulvinar vel massa, 
              pellentesque egestas. Eu viverra massa quam dignissim
              aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
            </p>

            <nav>
              <a href="#">{profile.login}</a>
              <a href="#">{profile.followers} seguidores</a>
            </nav>
          </div>
        </ProfileContainer>
      }

      <SearchContainer>
        <div>
          <h4>Publicações</h4>  
          <span>0 publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo"/>
      </SearchContainer>

      <PostsContainer>
        <div>1</div>  
        <div>2</div>  
        <div>3</div>  
        <div>4</div>  
        <div>5</div>  
        <div>6</div>  
      </PostsContainer>   
    </HomeContainer>
  )
}