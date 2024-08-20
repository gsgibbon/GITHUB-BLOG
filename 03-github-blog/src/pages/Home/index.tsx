import axios from "axios";
import { HomeContainer, LinkGithub, PostsContainer, ProfileContainer, SearchContainer } from "./styles";
import { useState, useEffect } from "react";

interface TypesProfile {
  name: string
  login: string
  avatar: string
  followers: string
}

interface TypesPosts {
  number: number
  title: string
  body: string
}

export function Home() {
  const [profile, setProfile] = useState<TypesProfile>()
  const [posts, setPosts] = useState<TypesPosts[]>([]);

  const [searchPost, setSearchPost] = useState<string>("");

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

  async function getIssues() {
   const response = await axios.get(`https://api.github.com/search/issues?q=repo:gsgibbon/Github-Blog`)

   const dataPost = response.data

   setPosts(dataPost.items)
   console.log(posts)
  }

  useEffect(() => {
    getProfile()
    getIssues()
  }, [])

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

   const responde = await axios.get(`https://api.github.com/search/issues?q=${searchPost}`)

   console.log(responde.data)
  }

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

      <SearchContainer onSubmit={handleSubmit}>
        <div>
          <h4>Publicações</h4>  
          <span>0 publicações</span>
        </div>
        <input 
          type="text" 
          placeholder="Buscar conteúdo" 
          onChange={(e) => setSearchPost(e.target.value)}
          value={searchPost}
        />
      </SearchContainer>
  
      <PostsContainer>
        {posts.length >= 0 &&   
          posts.map((post) => (
            <div key={post.number}>
              <h3>{post.title}</h3>
              <p>{post.body}</p>
            </div>
          ))
        }
      </PostsContainer> 
  
    </HomeContainer>
  )
}