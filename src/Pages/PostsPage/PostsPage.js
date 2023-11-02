import React, { useEffect, useState } from 'react'
import Container from '../../Components/Container/Container'
import PostsList from '../../Components/PostsList/PostsList'
import { Link } from 'react-router-dom'

const PostsPage = () => {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/posts')
    // .then(res => res.json())
    // .then(posts => {
    //   setPosts(posts)
    // })
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_embed=comments&_expand=user&_limit=35')
      const posts = await res.json()

      setPosts(posts)
    }
    fetchPosts()
  }, [])

 

  return (
    <Container> 
      <Link to='/create-post'>Create new Post</Link>
      <h1>Posts Page</h1>

     <PostsList posts={posts}/>
    </Container>
    
  )
}

export default PostsPage

// 2. Sukurti puslapį, kuriame bus atvaizduojami įrašai (posts). Kiekvienas įrašas turi:
//   2.1. Pavadinimą. Tai turi būti nuoroda. Ji turi vesti į post puslapį.
//   2.2. Autorių. Tai turi būti nuoroda. Ji turi vesti į user puslapį.
//   2.3. Prie pavadinimo pridėti įrašo komentarų skaičių.