import React, {useState} from "react";
import {Routes, Route} from "react-router-dom"
import {
    Register, 
    Login, 
    Posts, 
    CreatePost
} from "./index"

import {fetchPosts} from "../api"
function App(){
    const[token, setToken]= useState("");
    const[post, setPosts]= useState([])

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


    return(
        <div>
        <Routes>
            <Route
            path="/"
            element={<Posts posts={posts}/>}
            />
            <Route
            path="/register"
            element={<Login setToken={setToken}/>}
            />
            <Route
            path="/create-post"
            element={<CreatePost token={token} getPosts={getPosts}/>}
            />
        </Routes>
        </div>
    )
}

export default App;