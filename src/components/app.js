import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom"
import {
    Register, 
    Login, 
    Posts, 
    CreatePost,
    NavBar
} from "./index"

import {fetchPosts} from "../api"


function App(){
    const[token, setToken]= useState("");
    const[posts, setPosts]= useState([])

    function tokenCheck(){
        if(window.localStorage.getItem("token")){
            setToken(window.localStorage.getItem("token"))
        } 
    }

    async function getPosts(){
        const results= await fetchPosts()
        if(results.success){
            setPosts(results.data.posts)
        }
    }

    useEffect(()=>{
        tokenCheck();
    }, [])
    useEffect(() => {
        getPosts();
    }, [token])


    return (
        <div>
          <div id="stranger-things-title">
          <h1 id="title">Stranger's Things</h1>
          <NavBar/>
          </div>
          <Routes>
            <Route 
              path='/' 
              element={<Posts posts={posts} />} 
            />
            <Route 
              path='/register' 
              element={<Register setToken={setToken} />} 
            />
            <Route
              path='/login'
              element={<Login setToken={setToken} />}
            />
            <Route
              path='/create-post'
              element={<CreatePost token={token} getPosts={getPosts} />}
            />
          </Routes>
        </div>
      );
}


export default App;