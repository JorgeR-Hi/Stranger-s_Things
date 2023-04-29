import React, {useState} from "react";
import {makePost} from "../api"
import {useNavigate} from "react-router-dom"

function CreatePost({token, getPosts}){
    const [title, setTitle]=useState("");
    const [description, setDescription]= useState("")
    const [price, setPrice]=useState("");
    const navigate= useNavigate();

    async function handleSubmit(ev){
        ev.preventDefault();
        const post ={title, description, price}

        const results= await makePost(post, token)

        if (results.success){
            getPosts();
            navigate("/");
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter the Title"
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
            />
            <input
            type="text"
            placeholder="Enter a description"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            />
            <input
            type="text"
            placeholder="Enter a price"
            value={price}
            onChange={(ev) => setPrice(ev.target.value)}
            />
            <button type="submit">Create Post</button>
            
        </form>
    )
}

export default CreatePost;