import React, {useState} from "react";


function Register(){
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");
    function handleSubmit(ev){
        ev.preventDefualt();
        
    }

    
    return(
        <div>
           <form>
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

export default Register