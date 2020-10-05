import React from 'react'
import './Post.css'

const Post = () => {    
    return (
      <div className="post-container">
        <p className="author">Posted by: Juan Manuel Sierra</p>
        <h2 className="title">Creando nuevo proyecto</h2>
        <img
          src="https://images5.alphacoders.com/104/thumb-1920-1046568.jpg"
          alt=""
        />
        <p className="content">Empecé con la parte del front, vamos a ver que sale mas adelante</p>
      </div>
    );
}

export default Post;
