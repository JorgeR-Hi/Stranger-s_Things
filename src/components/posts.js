import React from "react"


function Posts({posts}){
 return(
    <>
    {
        posts && posts.map((posts)=>{
            return(
                <p key={posts.id}>{posts.title}</p>
            )
        })
    }
    </>
 )
}

export default Posts;