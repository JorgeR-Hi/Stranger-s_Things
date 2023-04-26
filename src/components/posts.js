import React, { Fragment } from "react"


function Posts({ posts }) {
   
    
    return (
      <div>
        {
          posts && posts.map((post) => {
            return (
              <Fragment key={post._id}>
                {
                  post.isAuthor ? (
                    <div id="posts">
                      <p >{post.title}</p>
                      <button>Delete</button>
                    </div>
                  ) : (
                    <div id="posts">
                      <p >{post.title}</p>
                      <button>Message</button>
                    </div>
                  )
                }
              </Fragment>
            )
          })
        }
      </div>
    );
  }
  
  export default Posts;