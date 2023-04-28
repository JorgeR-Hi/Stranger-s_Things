
import React from "react";

import { Link } from "react-router-dom";

function NavBar({setToken, setIsLoggedIn, isLoggedIn}){
    
    function logout(){
        setToken("");
        setIsLoggedIn(false);
        window.localStorage.removeItem("token")
    }
    
    
    
    
    return(
    <nav id="nav-bar">
        
        <button id="nav-button">
            <Link to="/">See all of the Posts</Link>
        </button>
        {isLoggedIn ? (
        <>
        <button id="nav-button">
            <Link to="/create-post">Create a Post</Link>
        </button>
        <button id="nav-button" onClick={logout}>Log Out</button>
        </>
        ) : (
            <>
            <button id="nav-button">
                <Link to="/login">Login</Link>
            </button>
            <button id="nav-button">
                <Link to="/register">Register</Link>
            </button>
            </>
        )}
    </nav>
    )
}

export default NavBar;