import React, {useState} from "react";
import { loginUser } from "../api";


function Login(){
    const[username, setUsername]=useState("")
    const[password, setPassword]=useState("")
    const[loginErr, setLoginErr]=useState("")

    async function handleSubmit(ev){
        ev.preventDefault();
        try{
            const result = await loginUser(username, password)
            console.log(response);
        }catch(err){
            setLoginError(err.message)
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