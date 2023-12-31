import React, { useEffect, useState } from 'react'
import Container from '../../Components/Container/Container'
import { Link, useParams } from 'react-router-dom'
import { API_URL } from '../../config'

const PostPage = () => {
    
    // const params = useParams()
    // const id = params.id

    const { id } = useParams()

    const [post, setPost] = useState(null)
    const [postDeleted, setPostDeleted] = useState(false)


    useEffect(() => {
        async function fetchPost() {
            const res = await fetch (`${API_URL}/posts/${id}?_embed=comments&_expand=user`)
            const postData = await res.json()

            setPost(postData)
        }
        fetchPost()
  
    }, [id])

    if (!post) {
      return ''
    }
    const removePostHandler = () => {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE',
      }) 
      setPostDeleted(true)
    }

  return (
    <Container>
      {postDeleted ? (
        <>
         <p> Post was deleted</p>
         <Link to='/posts'>Go back to posts</Link>
        </>
       
      ) : (
      <>
      <Link to={`/edit-post/${id}`}>Edit Post</Link>
      <button onClick={removePostHandler}>Delete</button>
      <h1>{post.title}(Title)</h1>
      <span>Author: 
        <Link to={`/users/${post.user.id}`}>{post.user.name}</Link>
      </span>

      <div>
        <h3>Comments:</h3>
        {post.comments && (
        <ol>
          {post.comments.map((comment) => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`}>
                {comment.name} 
              </Link>
              - {comment.body}. ({comment.email})
            </li>
          ))}
        </ol>
      )}
      </div>

      <div>
        <h3>
          <Link to={'/posts'}>Other authors posts</Link>
        </h3>
      </div>
      </>
      )}  
    </Container>
  )
}
export default PostPage

// 7. Sukurti naują puslapį post.html ir jame atvaizduoti:
//   7.1. Įrašo (post) pavadinimą.
//   7.2. Autoriaus vardą. Paspaudus ant autoriaus vardo, turėtų atidaryti autoriaus puslapį.
//   7.3. Įrašo turinį.
//   7.4. Įrašo komentarus. Kiekvienas komentaras turi:
//     7.4.1. Komentaro pavadinimą.
//     7.4.2. Komentaro turinį - pastraipą.
//     7.4.3. Komentarą parašiusio asmens el. pašto adresą.
//   7.5. Nuoroda „Kiti autoriaus įrašai", kurią paspaudus bus nukreipiama į puslapį posts.html. Jame vėliau bus atvaizduojami visi šio vartotojo įrašai.