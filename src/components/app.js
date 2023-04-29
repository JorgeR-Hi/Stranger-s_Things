import React, {useState, useEffect} from "react";
import {Routes, Route, useNavigate} from "react-router-dom"
import {
    Register, 
    Login, 
    Posts, 
    CreatePost,
    NavBar,
    UpdatePost,
    Message
} from "./index"

import {fetchPosts, myData} from "../api"


function App(){
    const[token, setToken]= useState("");
    const[posts, setPosts]= useState([])
    const[user, setUser]=useState({});
    const[isLoggedIn, setIsLoggedIn]= useState(false);

    const navigate = useNavigate();

    function tokenCheck(){
        if(window.localStorage.getItem("token")){
            setToken(window.localStorage.getItem("token"))
        } 
    }

    async function getPosts(){
        const results= await fetchPosts(token)
        if(results.success){
            setPosts(results.data.posts)
        }
    }

    async function getMyData(){
      const results= await myData(token)
      if(results.success){
        setUser(results.data)
      }
    }

    useEffect(()=>{
        tokenCheck();
    }, [])
    useEffect(() => {
        getPosts();
        if(token){
          getMyData();
          setIsLoggedIn(true);
        }
    }, [token])

console.log(posts)
    return (
        <div>
          <div id="stranger-things-title">
          <h1 id="title">Stranger's Things</h1>
          <NavBar
            setToken={setToken}
            setIsLoggedIn={setIsLoggedIn}
            isLoggedIn={isLoggedIn}
          />
          </div>
          <Routes>
            <Route 
              path='/' 
              element={<Posts 
                posts={posts} 
                token={token}
                getPosts={getPosts}
                isLoggedIn={isLoggedIn}
                
               />} 
                
            />
            <Route 
              path='/register' 
              element={<Register 
                setToken={setToken} 
                navigate={navigate} />} 
            />
            <Route
              path='/login'
              element={<Login 
                setToken={setToken} 
                navigate={navigate}/>}
            />
            <Route
              path='/create-post'
              element={<CreatePost 
                token={token} 
                getPosts={getPosts} />}
            />
            <Route
            path="/update-post/:postId"
            element={<UpdatePost
            posts={posts}
            token={token}
            getPosts={getPosts}
            />
            }/>
            <Route 
            path="/message/:postId"
            element={<Message
            posts={posts}
            token={token}
            getPosts={getPosts}
            />}
            
            />
          </Routes>
        </div>
      );
}


export default App;