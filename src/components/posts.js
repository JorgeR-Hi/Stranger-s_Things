import React, { Fragment } from "react"
import {Link} from "react-router-dom"

function Posts({ posts }) {
   
    
    return (
      <>
      {
        posts && posts.map((post) => {
          return (
            <div id="list-of-post">
                  <Fragment key={post._id}>
                    {
                      post.isAuthor ? (
                        <div class="posts">
                           <div id="posts">
                            <p id="post-title">{post.title}</p>
                            <p id="post-description">{post.description}</p>
                            <p id="post-price">{post.price}</p>
                            <Link>
                            <button id="del-button">delete</button>
                            </Link>
                            <Link to={`/update-post/${post._id}`}>
                              <button id="edit-button">Edit Post</button>
                            </Link>
                          
                        </div>
                        </div>
                      ) : (
                        <div class="posts">
                            <div id="posts">
                            <p id="post-title">Title: {post.title}</p>
                            <p id="post-description">Description: {post.description}</p>
                            <p id="post-price">Price: {post.price}</p>
                            <button id="mess-button">Message</button>
                            
                          </div>
                          </div>
                      )
                    }
                  </Fragment>
                
              
            
            </div>
          )
        })
      }
    </>
    );
  }
  
  export default Posts;


  