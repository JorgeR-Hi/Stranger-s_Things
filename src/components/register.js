import React, {useState} from "react";

import { registerUser } from "../api";

function Register(){
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
   
    function handleSubmit(ev){
        ev.preventDefault();
        const user= {username, password};
        try{
        const results= registerUser(user)
        console.log(results)
        }catch(err){
            console.error("We're having trouble registering your account", err)
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
            <button type="submit">Sumbit</button>
           </form>
        </div>
    )
}

export default Register;