import React from 'react'
import PostItem from '../PostItem/PostItem'

const PostsList = (props) => {
    const { posts } = props

    let postsElement = <p>No posts...</p>

    if (posts.length > 0) {
      postsElement = (
        <ul>
            {posts.map((post) => <PostItem key={post.id} data={post} />)}
        </ul>
      )
    }
    
  return (
    <div>
        {postsElement}
    </div>
    
  )
}

export default PostsList