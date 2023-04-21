import React, {useState} from "react";
import { loginUser } from "../api";


function Login({setToken}){
    const[username, setUsername]=useState("")
    const[password, setPassword]=useState("")
    const[loginErr, setLoginErr]=useState("")

    async function handleSubmit(ev){
        ev.preventDefault();
        const user= {username, password};
        const results = await loginUser(user)
        console.log(response);
      
        if(results.success){
            setToken(results.data.token);
            window.localStorage.getItem("token", results.data.token)
        }
        
    }

    return(
        <div id="login">
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
            {loginErr && <p>{loginErr}</p>}
            <button type="submit">Login</button>
           </form>
        </div>
    )
}


export default Login;