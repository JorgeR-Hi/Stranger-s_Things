import React, {useState} from "react";
import {  useNavigate } from "react-router-dom";
import { registerUser } from "../api";

function Register({setToken}){
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    const navigate = useNavigate();
    async function handleSubmit(ev){
        ev.preventDefault();
        const user= {username, password};
 
        const results= await registerUser(user)
        const token = results.token;
        
        setToken(token);
        console.log(results)
       
        if(results.success){
            setToken(results.data.token);
            window.localStorage.setItem("token", results.data.token)
            navigate("/")
        }
         
    }
    
   
    return(
        <div id="register">
           <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Enter Username"
            onChange={(ev)=> setUsername(ev.target.value)}
            />
            <input 
            type="password"
            placeholder="Enter Password"
            onChange={(ev)=> setPassword(ev.target.value)}
            />
            <button type="submit">Create Account</button>
           </form>
        </div>
    )
}

export default Register;