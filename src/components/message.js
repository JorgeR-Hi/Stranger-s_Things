import React, {useState} from "react"
import { useParams, useNavigate} from "react-router-dom"
import { postMessage } from "../api"



function Message({posts, token}){
    const navigate= useNavigate();
    const {postId} = useParams();
    //console.log(posts)
    const [post]= posts.filter((post) => post._id === postId)
    const [message, setMessage]= useState("")

    const handleSubmit= async (ev) =>{
        ev.preventDefault();

        try{
            const result = await postMessage(postId, message, token)
            if(result.success){
                navigate(`/post/${postId}`)

            }else{
                console.log("There was an error when sending your message", result.error)
            }

        }catch(err){
            console.error("There was an error sending your message", err)
        }
    }


    return(
        
        <div>
            <h2>Message Post</h2>
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="message">Message:</label>
                <textarea 
                id="message"
                value={message}
                onChange={(ev) => setMessage(ev.target.value)}
                />
                {!token && <p id="please-login">Please Login to send messages</p>}
                <button type="submit" disabled={!token}>Send Message</button>
            </form>
            {//console.log(message)
            }
        </div>
        
    )
}

export default Message;