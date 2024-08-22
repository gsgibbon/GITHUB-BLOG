import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { HeaderPost, PostContainer } from "./styles";

interface typesPost {
  title: string
  body: string
  updated_at: string
  user: {
    login: string
  }
  comments: number
}

export function Post () {
  const {id} = useParams();
  const [post, setPost] = useState<typesPost>()

  async function getPost() {
    const response = await axios.get(`https://api.github.com/repos/gsgibbon/Github-Blog/issues/${id}`)

    const dataPost = response.data; 
    setPost(dataPost)
    console.log(dataPost.user.login)
  }

  useEffect(() => {
    getPost();
  }, [id])

  return(
    <PostContainer>
      <HeaderPost> 
        <nav>
          <Link to={"/"}>voltar</Link>
          <Link to={"/"}>ver no github</Link>
        </nav>
        <h2>{post?.title}</h2>
        <ul>
          <li>{post?.user.login}</li>
          <li>{post?.updated_at}</li>
          <li>{post?.comments}</li>
        </ul>
      </HeaderPost>
      <div>
        <p>{post?.body}</p>
      </div>
    </PostContainer>
  )
}