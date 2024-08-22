import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { PostContainer } from "./styles";

interface typesPost {
  title: string
  body: string
  updated_at: string
  login: string
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
      
    </PostContainer>
  )
}