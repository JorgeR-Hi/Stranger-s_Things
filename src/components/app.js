import React, {useState} from "react";

import {Register, Login} from "./index"
 
function App(){
    const [showRegister, setShowRegister]= useState(false)
    const [showLogin, setShowLogin] = useState(false);


    const handleRegisterClick = (ev) =>{
        ev.preventDefault();
        setShowRegister(true);
        
    };
    const handleLoginClick= (ev) =>{
        ev.preventDefault();
        setShowLogin(true);
    }

    return(
        <div>
        <button onClick={handleRegisterClick}>Register</button>
        <button onClick={handleLoginClick}>Login</button>
        {showRegister ? (
        <Register />
      ) : showLogin ? (
        <Login />
      ) : (
        <p>Please select an option</p>
      )}
        </div>
    )
}

export default App;