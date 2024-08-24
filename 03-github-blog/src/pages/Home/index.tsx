import axios from "axios";

import { useState, useEffect } from "react";
import { 
  HomeContainer, 
  LinkGithub, 
  Post,
  PostsContainer, 
  ProfileContainer, 
  SearchContainer 
} from "./styles";

// format date
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";

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
  updated_at: string
}

interface SeachPostData {
  searchPost: string
}
export function Home() {
  const [profile, setProfile] = useState<TypesProfile>()
  const [posts, setPosts] = useState<TypesPosts[]>([]);

  // const [searchPost, setSearchPost] = useState<string>("");

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
  } = useForm<SeachPostData>();

  async function getProfile() {
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
  }

  useEffect(() => {
    getProfile()
    getIssues()
  }, [])

// format Date
  function formatDate(date: string) {
    return formatDistanceToNow(date, {
      addSuffix: true,
      locale: ptBR
    })
  }

  function handlePostClick(postNumber: number) {
    navigate(`/post/${postNumber}`)
  }

  async function handleSeachPost(data: SeachPostData) {
    const response = await axios.get(
      `https://api.github.com/search/issues?q=${data.searchPost} repo:gsgibbon/Github-blog`
    )
    const dataPost = response.data
    
    setPosts(dataPost.items)
  }
  return(
    <HomeContainer>
      {profile && 
        <ProfileContainer>
          <img src={profile.avatar} alt="" />
          <div>
            <h2>{profile.name}</h2>
            
            <LinkGithub href="https://github.com/gsgibbon">GITHUB</LinkGithub>
            
            <p>
              Tristique volutpat pulvinar vel massa, 
              pellentesque egestas. Eu viverra massa quam dignissim
              aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
            </p>

            <ul>
              <li>{profile.login}</li>
              <li>{profile.followers} seguidores</li>
            </ul>
          </div>
        </ProfileContainer>
      }

      <SearchContainer >
        <div>
          <h4>Publicações</h4>  
          <span>0 publicações</span>
        </div>
        <form onSubmit={handleSubmit(handleSeachPost)}>
          <input 
            type="text" 
            placeholder="Buscar conteúdo"
            {...register("searchPost")} 
          />
        </form>
      </SearchContainer>
  
      <PostsContainer>
        {posts.length > 0 &&   
          posts.map((post) => (
            <Post key={post.number} onClick={() => handlePostClick(post.number)}>
              <div>
                <h3>{post.title}</h3>
                <span>{formatDate(post.updated_at)}</span>
              </div>
              <p>{post.body}</p>
            </Post>
          ))
        }
      </PostsContainer> 
  
    </HomeContainer>
  )
}