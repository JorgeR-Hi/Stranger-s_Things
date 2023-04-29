import React, { Fragment } from "react"
import {Link} from "react-router-dom"
import { deletePost} from "../api";
import Message from "./message"


function Posts({posts, token, getPosts, isLoggedIn}) {
  
 
  async function handleDelete( postId, token, getPosts){
    try{
      const result = await deletePost(postId, token);
      if(result.success){
        getPosts();
      }else{
        console.log("There was an error when deleting your post",result.error);
      }
    }catch(err){
      console.error("There was an error when deleting your post", err);

    }
  }

  return (
    <>
    {
      posts && posts.map((post) => {
        return (
          <div id="list-of-post" key={post._id}>
            <Fragment>
              {
                post.isAuthor ? (
                  
                  <div className="posts">
                     <div id="posts">
                      <p id="post-title">{post.title}</p>
                      <p id="post-description">{post.description}</p>
                      <p id="post-price">{post.price}</p>
                
                      <button id="del-button" onClick={() => handleDelete(post._id, token, getPosts)}>Delete</button>
                      
                      <Link to={`/update-post/${post._id}`}>
                        <button id="edit-button">Edit Post</button>
                      </Link>
                     
                    
                  </div>
                  </div>
                ) : (
                  <div className="posts">
                      <div id="posts">
                      <p id="post-title">Title: {post.title}</p>
                      <p id="post-description">Description: {post.description}</p>
                      <p id="post-price">Price: {post.price}</p>
                      {isLoggedIn ? (
                      
                        <Message posts={posts }postId={post._id} token={token} getPosts={getPosts} />
                     ) : (
                        <p id="please-login">Please login to message</p>
                      )}
                      </div>
                    </div>
                )
              }
              {console.log(post.isAuthor)
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


  