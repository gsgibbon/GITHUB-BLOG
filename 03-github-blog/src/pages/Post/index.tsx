import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import { formatDistanceToNow } from "date-fns";
import { HeaderPost, PostContainer } from "./styles";
import { ptBR } from "date-fns/locale";

interface typesPost {
  title: string
  body: string
  updated_at: string
  user: {
    login: string
  }
  comments: number
}

export function Post() {
  const {id} = useParams();
  const [post, setPost] = useState<typesPost>()

  function formatDate(date: string) {
    return formatDistanceToNow(date, {
      addSuffix: true,
      locale: ptBR
    })
  }

  useEffect(() => {
    async function getPost() {
      const response = await axios.get(`https://api.github.com/repos/gsgibbon/Github-Blog/issues/${id}`)

      const dataPost = response.data;

      setPost(dataPost)
    }

    getPost();
  }, [id, post])

  return(
    <PostContainer>
      <HeaderPost> 
        <nav>
          <Link to={"/"}>voltar</Link>
          <a href={`https://github.com/gsgibbon/Github-Blog/issues/${id}`}>ver no github</a>
        </nav>
        <h2>{post?.title}</h2>
        <ul>
          <li>{post?.user.login}</li>
          <li>{post?.updated_at ? formatDate(post?.updated_at) : ""}</li>
          <li>{post?.comments} comentários</li>
        </ul>
      </HeaderPost>
      <div>
        <p>{post?.body}</p>
      </div>
    </PostContainer>
  )
}